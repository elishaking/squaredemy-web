import React, { Component } from 'react';
import './Home.scss';

import Navbar from '../layout/Navbar/Navbar';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <h1>Hello</h1>
      </div>
    )
  }
}
