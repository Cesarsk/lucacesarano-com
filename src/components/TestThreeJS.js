import React, { Component } from 'react';
import threeEntryPoint from './threejs/threeEntryPoint';
import '../styles/TestThreeJS.css';

export default class ThreeContainer extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render () {
      return (
        <div ref={element => this.threeRootElement = element} />
      );
  }
}