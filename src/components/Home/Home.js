import React, { Component } from 'react';
import './Home.scss';

import Navbar from '../layout/Navbar/Navbar';

import dashboard from '../../assets/images/dashboard.svg'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />

        <div className="main container">
          <div className="left">
            <h1 className="headline">
              The Most Productive Way To Learn
            </h1>

            <p className="lead">A well-informed Artificial Intelligence expert named Squaredbot. built to make learning fun and interactive. </p>

            <div className="action">
              <a className="fill" href="#more">Get Squaredemy</a>
              <a className="outline" href="#testing">Join</a>
            </div>
          </div>

          <div className="right">
            <img src={dashboard} alt="Squaredemy Dashboard" />
          </div>
        </div>
      </div>
    )
  }
}
