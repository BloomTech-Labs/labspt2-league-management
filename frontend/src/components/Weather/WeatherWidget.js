import React, { Component } from 'react';
import axios from 'axios';

class WeatherWidget extends Component {
  state = {
    temp: null,
    condition: null,
    city: null,
    state: null,
    loading: true,
    daytime: null
  };

  componentDidMount() {
    axios.get('https://league-management.herokuapp.com/weather').then(res => {
      const { time, temperature, icon } = res.data.weatherData.currently;
      console.log(res.data.weatherData.daily.data[0]);
      const { sunriseTime, sunsetTime } = res.data.weatherData.daily.data[0];
      this.setState({
        temp: Math.floor(temperature),
        condition: icon,
        city: res.data.city,
        state: res.data.state,
        daytime: time < sunsetTime && time > sunriseTime,
        loading: false
      });
    });
  }

  render() {
    const widget = {
      textAlign: 'center',
      fontSize: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      width: 150,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid lightgray',
      borderRadius: 35,
      color: this.state.daytime ? '#333' : '#fff',
      backgroundColor: this.state.daytime ? '#fff' : '#333'
    };

    const style1 = {
      display: 'flex',
      width: '80%',
      paddingLeft: 5,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 0,
      marginBottom: -10
    };

    if (this.state.loading) {
      return <h3 style={widget}>Loading...</h3>;
    }
    return (
      <div style={widget}>
        <h3 style={style1}>
          {this.state.temp}˚F
          <img
            src={require(`../../Icons/${this.state.condition}.png`)}
            alt={this.state.condition}
            height="40px"
          />
        </h3>
        <a href="https://darksky.net/poweredby/" target="_blank">
          <img
            src={
              this.state.daytime
                ? require(`../../poweredby-oneline.png`)
                : require(`../../poweredby-oneline-darkbackground.png`)
            }
            alt="alt"
            width="120px"
          />
        </a>
      </div>
    );
  }
}

export default WeatherWidget;
