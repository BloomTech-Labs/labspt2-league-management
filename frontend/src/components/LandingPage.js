import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import baseball from '../Images/7261.baseball-and-bat-500x300.jpg';
import soccer from '../Images/soccer-ball-ss-img.jpg';
import football from '../Images/football-and-football-field-1024x648.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sports from '../Images/sports-banner.jpeg';
// import WeatherWidget from './Weather/WeatherWidget';
import { AppContext } from './Context/AppContext';
import './LandingPage.css';
import Search from './Search/Search';

class LandingPage extends Component {
  componentDidMount() {
    const token = localStorage.getItem('jwt') || this.context.signOut();
    let username = null;
    if (token) {
      const decoded = jwt_decode(token);
      username = decoded.username;
      // console.log('decoded jwt: ', decoded);
      this.context.signedIn(username);
    }
  }

  render() {
    const { username, loggedIn } = this.context.state;
    // const { login } = this.context;
    // console.log(this.context);
    if (!loggedIn) {
      // console.log(this.props.data);
      return (
        <div className="landing-page">
          <section className="content">
          <header className="header" style={{backgroundImage: `url(${sports})`}}>
        <nav className="links">
          <a href="/signin">Login</a>
          <a href="/signup">Sign Up</a>          
        </nav>            
        <div className="header-content">                
            <Search />
          <span><h1>Average Joe League Management</h1></span>     
          <p>Do you want a fast easy way to organize your sports league?  Look no further we have the solution you have been looking for!</p>
        </div> 
      </header> 
      <section className="middle-content">
        {/* <div className="carousel">
          <div className="left-button"></div>
          <img className="carousel-img" src={baseball} data-img="1"/>
          <img className="carousel-img" src={soccer} data-img="2"/>
          <img className="carousel-img" src={football} data-img="3"/>  
          <div className="right-button"></div>
        </div>
        <span className="quote-area"></span>
        <div className="story-quote">
          <p className="quote" data-img="1">Take me out to the ball game...</p>
          <p className="quote" data-img="2">GOOOAAAALLLLL!!!!</p>
          <p className="quote" data-img="3">TOUCHDOWN!!!</p>
        </div>        */}
        <Carousel showArrows={true} infiniteLoop autoPlay >
                <div>
                    <img src={baseball} />
                    <p className="legend">TAKE ME OUT TO THE BALL GAME....</p>
                </div>
                <div>
                    <img src={soccer} />
                    <p className="legend">GOOOAAAALLLLL!!!!!</p>
                </div>
                <div>
                    <img  src={football} />
                    <p className="legend">TOUCHDOWN!!!!</p>
                </div> 
            </Carousel>
      </section>
  </section>  
  <footer className="footer">
    <h4>Contact</h4>
    <div>
      <address><a href="mailto:lmlambdalabs@gmail.com">lmlambdalabs.com</a></address>
      <p>1-800-888-4141</p>
    </div>
  </footer>  
        </div>
      );
    }
    return (
      <>
        {/* <WeatherWidget /> */}
        <div>App Name</div>
        <div>{username}</div>
        <Link to="/settings">My Settings</Link>
        <br />
        <Link to="/dashboard">My Account</Link> <div>Landing Page Content</div>
      </>
    );
  }
}

LandingPage.contextType = AppContext;

export default LandingPage;