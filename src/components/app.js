import React, { Component } from 'react';
import { app } from '../assets/styles/index';
import { WeatherCard, ForecastCard } from './subcomponents/index';
import { Row, Col } from 'react-materialize';
import { getWeatherFromYahoo } from '../services/api_services';

class App extends Component {
  constructor(){
    super();
    this.state = {
      location: '',
      state: '',
      forecast: 'Mostly Sunny',
      temperature: '75',
      weeklyForecast: [
        {
            day:'Monday',
            text:'sunny_desc',
            high: '90',
            low: '65',
        },
        {
            day:'Tuesday',
            text:'rainy_desc',
            high: '90',
            low: '65',
        }
      ],
    }
  }

  componentWillMount(){
    this.requestWeather('atlanta');
  }

  requestWeather = (location) => {
    getWeatherFromYahoo(location).then(weather =>{
      console.log("Weather",weather);
      let upcomingWeather = [];
      for(var i=0;i<7;i++){
         upcomingWeather.push(weather.forecasts[i])
      }
      this.setState({
        city: weather.location.city,
        state:weather.location.region,
        forecast:weather.current_observation.condition.text,
        temperature:weather.current_observation.condition.temperature,
        weeklyForecast: upcomingWeather
      });
   });
  }

  convertCelsius = () => {
    let celsius = Math.round(((this.state.temperature)- 32)*(5 / 9));
    let forecast = this.state.weeklyForecast;
    forecast.forEach(cast => {
      cast.high = Math.round(((cast.high)- 32)*(5 / 9));
      cast.low = Math.round(((cast.low)- 32)*(5 / 9));
    });
    this.setState({
      temperature:celsius,
      weeklyForecast:forecast
    });
  }

  convertFahrenheit = () => {
    let fahrenheit = Math.round(((this.state.temperature)* (9 / 5)) + 32);

    let forecast = this.state.weeklyForecast;
    forecast.forEach(cast => {
      cast.high = Math.round(((cast.high)* (9 / 5)) + 32);
      cast.low = Math.round(((cast.low)* (9 / 5)) + 32);
    });
    this.setState({
      temperature:fahrenheit,
      weeklyForecast:forecast
    });
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col className='content' s={9}>
            <WeatherCard {...this.state} convertCelsius={this.convertCelsius} convertFahrenheit={this.convertFahrenheit} getWeather={this.requestWeather}/>
          </Col>
          <Col className='content' s={3}>
            <ForecastCard {...this.state}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
