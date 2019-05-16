import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import baseball from '../Images/7261.baseball-and-bat-500x300.jpg';
import soccer from '../Images/soccer-ball-ss-img.jpg';
import football from '../Images/football-and-football-field-1024x648.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import sports from '../Images/sports-banner.jpeg';
import { AppContext } from './Context/AppContext';
import './LandingPage.css';
import Navbar from './Dashboards/Navbar';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoGallery from './Gallery/PhotoGallery';

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
    const { loggedIn } = this.context.state;
    // const { login } = this.context;
    // console.log(this.context);
    if (!loggedIn) {
      // console.log(this.props.data);
      return (
        <>
          <Navbar />
          <div className="landing-page">
            <section className="content">
              <header
                className="header"
                // style={{ backgroundImage: `url(${sports})` }}
              >
                <div className="header-content">
                  <span>
                    <h1>Welcome to League Manager</h1>
                  </span>
                  <p>
                    Do you want a fast, easy way to organize your sports league?
                    Look no further! We have the solution you have been looking
                    for!
                  </p>
                  <Link to="/signup">
                    <div className="ctaBtn">Sign Up Now!</div>
                  </Link>
                </div>
              </header>
              <section className="middle-content">
                <div className="features">
                  <div className="feature">
                    <div className="number">1.</div>
                    <div>Create an account</div>
                  </div>
                  <div className="feature">
                    <div className="number">2.</div>
                    <div>Admin dashboard for leagues you create </div>
                  </div>
                  <div className="feature">
                    <div className="number">3.</div>
                    <div>Coaching dashboard for teams you coach </div>
                  </div>
                </div>
              </section>
            </section>
            <section className="screenshots">
              <img
                className="screenshot1"
                src={require('../Images/Calendar.png')}
                alt="Calendar Screenshot"
              />
              <img
                className="screenshot2"
                src={require('../Images/leagueSettings.png')}
                alt="Calendar Screenshot"
              />
              {/* <div className="screenshot1" /> */}
              {/* <div className="screenshot2" /> */}
            </section>
            <PhotoGallery />
            <footer className="footer">
              <div className="footer-content">
                <div className="social-media">
                  {/* <p>Social Media</p> */}
                  <FontAwesomeIcon
                    className="icon"
                    icon={['fab', 'facebook-f']}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={['fab', 'twitter']}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={['fab', 'instagram']}
                    size="2x"
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={['fab', 'snapchat-ghost']}
                    size="2x"
                  />
                </div>
                <div className="contact">
                  <div>Contact Us</div>
                  <a href="mailto:lmlambdalabs@gmail.com">
                    <p>lmlambdalabs.com</p>
                  </a>
                  <p>1-800-888-4141</p>
                </div>
              </div>
              <p className="copyright">&copy; 2019 - League Manager Team</p>
            </footer>
          </div>
        </>
      );
    }
    return (
      <>
        {/* <WeatherWidget />
        <div>App Name</div>
        <div>{username}</div>
        <Link to="/settings">My Settings</Link>
        <br />
        <Link to="/dashboard">My Account</Link> <div>Landing Page Content</div> */}
        <Redirect to="/dashboard" />
      </>
    );
  }
}

LandingPage.contextType = AppContext;

export default LandingPage;
