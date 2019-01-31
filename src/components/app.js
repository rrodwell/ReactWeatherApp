import React, { Component } from 'react';
import { app } from '../assets/styles/index';
import { WeatherCard, ForecastCard } from './subcomponents/index';
import { Row, Col } from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col className='content' s={9}>
            <WeatherCard/>
          </Col>
          <Col className='content' s={3}>
            <ForecastCard/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
