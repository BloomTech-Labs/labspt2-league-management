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
    const endpoint =
      process.env.NODE_ENV === 'production'
        ? 'https://league-management.herokuapp.com/weather'
        : 'http://localhost:4000/weather';
    axios.get(endpoint).then(res => {
      const { time, temperature, icon } = res.data.weatherData.currently;
      // console.log(res.data.weatherData.daily.data[0]);
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
      paddingTop: 4,
      fontSize: '1.25rem',
      display: 'flex',
      flexDirection: 'column',
      width: 150,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      // boxShadow: '0px 2px 6px #111111',
      // border: '1px solid lightgray',
      borderRadius: 5,
      color: this.state.daytime ? '#333' : '#fff',
      backgroundColor: this.state.daytime ? '#fff' : '#333',
      margin: this.state.loading ? 0 : null,
      marginRight: '2%'
    };

    const style1 = {
      display: 'flex',
      width: '80%',
      paddingLeft: 5,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin: 0,
      marginBottom: -10,
      fontSize: '1.1rem'
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
            height="30px"
          />
        </h3>
        <a
          href="https://darksky.net/poweredby/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={
              this.state.daytime
                ? require(`../../Images/poweredby-oneline.png`)
                : require(`../../Images/poweredby-oneline-darkbackground.png`)
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
