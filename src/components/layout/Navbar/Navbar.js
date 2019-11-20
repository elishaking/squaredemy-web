import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar container-nav">
        <h1 className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 53 46.984">
            <g id="Group_604" data-name="Group 604" transform="translate(-658.05 -174.77)">
              <path id="Path_999" data-name="Path 999" d="M711.05,197.362c0,10.263-8.026,18.928-19.02,21.68a1.3,1.3,0,0,1-1.371-2.019,12.918,12.918,0,0,0,2.326-7.588c0-6.076-3.774-11-8.43-11s-8.43,4.925-8.43,11a12.918,12.918,0,0,0,2.327,7.589,1.3,1.3,0,0,1-1.368,2.021,29.269,29.269,0,0,1-3.655-1.171,1.9,1.9,0,0,0-1.754.185l-5.219,3.485a1.178,1.178,0,0,1-1.827-1.183l1.012-5.984a1.9,1.9,0,0,0-.588-1.714,20.821,20.821,0,0,1-7-15.3c0-12.477,11.864-22.592,26.5-22.592S711.05,184.885,711.05,197.362Z" transform="translate(0 0)" fill="#5f8fee" />
            </g>
          </svg>

          <span>Squaredemy</span>
        </h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}
