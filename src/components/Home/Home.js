import React, { Component } from 'react';
import axios from 'axios';
import './Home.scss';

import Navbar from '../layout/Navbar/Navbar';

import dashboard from '../../assets/images/dashboard.svg';
import available from '../../assets/images/available.svg';
import gPlay from '../../assets/images/g-play.svg';
import squaredbot from '../../assets/images/squaredbot.svg';
import smartBg from '../../assets/images/smart-bg.svg';
import ai from '../../assets/images/ai.svg';
import monitoring from '../../assets/images/monitoring.svg';
import library from '../../assets/images/lib.svg';

import Footer from '../layout/Footer/Footer';

export default class Home extends Component {
  state = {
    email: '',
    loading: false,
    errors: {}
  };

  onChange = (e) => {
    this.setState({ email: e.target.value });
  };

  subscribeUser = (e) => {
    e.preventDefault();

    const { email } = this.state;
    const { isValid, errors } = this.validateSubscribeInput({ email });

    this.setState({ errors });

    if (!isValid) return;

    this.setState({ loading: true });

    axios.post("https://api.squaredemy.skyblazar.com/subscribe",
      { email })
      .then((data) => {
        this.setState({ loading: false, email: '' });
      })
      .catch((err) => {
        this.setState({ loading: false, email: '' });
      });

    // fetch("https://api.squaredemy.skyblazar.com/subscribe", {
    //   method: "POST",
    //   headers: "Content-Type: application/json",
    //   body: JSON.stringify({ email: this.state.email }),
    //   mode: "no-cors"
    // })
    //   .then((res) => res.json().then((data) => {
    //     this.setState({ loading: false, email: '' });
    //   }))
    //   .catch((err) => {
    //     this.setState({ loading: false, email: '' });
    //   });
  };

  validateSubscribeInput = (data) => {
    const errors = {};

    if (data.email.length === 0)
      errors.email = "email is required";
    else if (data.email.length > 40)
      errors.email = "email should have less than 40 characters";
    else if (!new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/).test(data.email))
      errors.email = "Please enter a valid email";

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };

  scrollPage = (e) => {
    e.preventDefault();

    console.log(e.target.href);

    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(e.target.href.split("#")[1]).offsetTop
    });
  };

  render() {
    const { email, loading, errors } = this.state;

    return (
      <div className="home">
        <Navbar />

        <div className="main container-nav">
          <div className="left">
            <h1 className="headline">
              The Most Productive Way To Learn
            </h1>

            <p className="lead">Squaredemy is an AI-driven learning platform that enhances learning productivity through customized curriculums that are generated based on fun and engaging interactions with the user</p>

            <div className="action">
              <a className="btn fill" href="#available" onClick={this.scrollPage}>Get Squaredemy</a>
              <a className="btn outline" href="#subscribe" onClick={this.scrollPage}>Join</a>
            </div>
          </div>

          <div className="right">
            <img src={dashboard} alt="Squaredemy Dashboard" />
          </div>
        </div>

        <div id="available" className="available container">
          <img className="lg" src={available} alt="Available for Download" />
          <h1><span>Beta</span> available for Download on Android</h1>
          <a href="https://play.google.com/store/apps/details?id=skyblazar.com.squaredemy" className="download">
            <img src={gPlay} alt="Google Play Download" />
          </a>
        </div>

        <div className="squaredbot container">
          <svg id="squaredbot" xmlns="http://www.w3.org/2000/svg" width="1em" height="1.9em" viewBox="0 0 910.849 1696.869">
            <path id="Path_113" data-name="Path 113" d="M202.048,1266.211H122.817v-47.538c79.231-36.974,147.9-100.357,179.589-184.869,73.948-10.564,126.767-73.948,126.767-147.9,0-79.23-58.1-142.613-132.048-147.9-21.129-36.973-47.538-73.947-79.231-105.64L339.379,289.04c5.281-21.127-5.283-42.256-26.41-52.819-21.129-5.283-42.257,5.282-52.821,26.41l-110.922,322.2C96.405,558.423,38.3,542.576-19.8,537.3h0c-63.386,0-121.486,15.846-169.026,47.537l-110.922-322.2c-5.283-21.127-31.693-31.693-52.819-26.41s-31.693,31.692-26.412,52.819l121.486,343.331c-31.693,31.693-58.1,63.383-79.229,105.64-73.948,5.283-132.05,68.667-132.05,147.9,0,73.948,52.819,137.332,126.767,147.9,36.974,84.512,100.357,147.9,179.588,184.869v47.538h-79.231c-116.2,0-221.843,84.512-232.408,200.715-15.845,132.05,89.8,248.255,221.845,248.255v126.768c0,47.537,36.974,84.512,84.512,84.512s84.512-36.975,84.512-84.512V1720.463H43.586v126.768c0,47.537,36.974,84.512,84.512,84.512s84.512-36.975,84.512-84.512V1720.463c132.05,0,232.408-116.2,221.846-248.255C423.891,1350.723,318.251,1266.211,202.048,1266.211ZM-19.8,1160.571h0c-142.615,0-258.817-116.2-258.817-258.817S-162.41,642.935-19.8,642.935h0c142.614,0,258.819,116.2,258.819,258.818C239.022,1039.086,122.817,1155.289-19.8,1160.571Z" transform="translate(475.63 -234.874)" fill="#fff" />
            <path id="Path_114" data-name="Path 114" d="M-254.538,243.3C-376.022,243.3-471.1,343.659-471.1,459.862c0,121.487,95.076,216.563,216.562,216.563S-37.975,576.067-37.975,459.862-133.052,243.3-254.538,243.3Zm0,375.022h0c-84.512,0-158.46-68.667-158.46-158.46,0-84.513,68.667-158.461,153.178-158.461h0c84.512,0,153.177,68.667,153.177,158.461C-96.078,549.657-170.026,618.322-254.538,618.322Z" transform="translate(710.371 201.735)" fill="#fff" />
          </svg>

          <div className="intro">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" viewBox="0 0 124 107">
              <path id="Polygon_1" data-name="Polygon 1" d="M62,0l62,107H0Z" fill="#fff" />
            </svg>

            <h1>Hi there! I'm Squaredbot</h1>
          </div>

          <p className="info">
            I'm the AI that behind Squaredemy. Learning anything new can be challenging and sometimes boring. But hey, we all know that Education is the engine of prosperity, so something must be done about the process of learning new things. That's why I was created with the sole purpose of making learning a fun, interactive and engaging process. You'll certainly discover that you're not only boosting your learning speed, but with my help, you'll also find the process of learning even the most mundane concepts very interesting
          </p>

          <h3>I need your help</h3>

          <a href="#testing" className="btn fill-white">How <span role="img" aria-label="how">🤔🤔</span></a>
        </div>

        <div className="smart container">
          <img className="simple" src={squaredbot} alt="Simple and Smart" />
          <h1>Simple and Smart</h1>
          <a href="#testing" className="btn fill-white">Join</a>
          <img className="bg" src={smartBg} alt="" />
        </div>

        <div className="features container">
          <h1>Core features</h1>

          <div className="content">
            <div className="feature">
              <img src={ai} alt="Artificial Intelligence" />
              <h3>Artificial Intelligence</h3>
              <p>Trained Artificial Intelligence to offer expert guidance to students</p>
            </div>

            <div className="feature">
              <img src={monitoring} alt="Monitoring" />
              <h3>Monitoring</h3>
              <p>We keep track of your entire learning process to keep</p>
            </div>

            <div className="feature">
              <img src={library} alt="Library" />
              <h3>Library</h3>
              <p>Huge library of high quality tutorials created by </p>
            </div>
          </div>
        </div>

        <div id="subscribe" className="subscribe container">
          <h1>Join the email Squad</h1>
          <form id="subscribe-form" onSubmit={this.subscribeUser}>
            <div className="input">
              <input className={`${errors.email ? "error" : ""}`} type="text" placeholder="email" value={email} onChange={this.onChange} />
              {errors.email && (<small>{errors.email}</small>)}
            </div>
            {
              loading ? (
                <span>
                  <svg id="loader" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 34 34">
                    <g id="Ellipse_9" data-name="Ellipse 9" fill="none" stroke="#4475e6" stroke-width="7">
                      <circle cx="17" cy="17" r="17" stroke="none" />
                      <circle cx="17" cy="17" r="13.5" fill="none" />
                    </g>
                  </svg>
                </span>
              ) : (<input type="submit" value="Subscribe" />)
            }
          </form>
        </div>

        <Footer />
      </div>
    )
  }
}
