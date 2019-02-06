import React, { Component } from 'react';
import '../assets/styles/index';
import { WeatherCard, ForecastCard } from './subcomponents/index';
import { Row, Col } from 'react-materialize';
import { getWeatherFromYahoo, getUnsplashImage } from '../services/api_services';

class App extends Component {
  constructor(){
    super();
    this.state = {
      location: '',
      state: '',
      forecast: '',
      temperature: '',
      weeklyForecast: [],
      imageSrc: '',
    }
  }

  componentWillMount(){
    this.requestWeather('atlanta');
    // this.requestWeatherImage(this.getDescription(37));
  }

  requestWeather = (location) => {
    getWeatherFromYahoo(location).then(weather =>{
      console.log("Weather",weather);
      let upcomingWeather = [];
      for(var i=1;i<8;i++){
         upcomingWeather.push(weather.forecasts[i])
      }
      this.setState({
        city: weather.location.city,
        state:weather.location.region,
        forecast:weather.current_observation.condition.text,
        temperature:weather.current_observation.condition.temperature,
        weeklyForecast: upcomingWeather
      });
      // this.requestWeather(weather.condition.code);
    }).catch(err => {
      console.error('Weather request failed.', err);
    });
  }

  requestWeatherImage = (desc) => {
    getUnsplashImage(desc).then(imageJson => {
      this.setState({imageSrc:imageJson.urls.custom})
    })
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

  getDescription = (code) => {
    let rainy = [8,9,10,11,12,17,18,35,45];
    let cloudy = [19,20,21,22,23,24,25,26,27,28,29,30];
    let snow = [5,6,7,13,14,15,16,41,42,43,46];
    let storm = [0,1,2,3,4,47];
    let mostlySunny = [44];
    let sunShower = [37,38,39,40];
    if(storm.includes(code)){
      return 'storm'
    } else if(mostlySunny.includes(code)){
        return 'overcast'
    } else if(cloudy.includes(code)){
        return 'cloudy'
    } else if(rainy.includes(code)){
        return 'rain'
    } else if(snow.includes(code)){
        return 'snow'
    } else if(sunShower.includes(code)){
        return 'light rain'
    } else {
        return 'sun'
    }
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col className='content' s={9}>
            <WeatherCard {...this.state} convertCelsius={this.convertCelsius} convertFahrenheit={this.convertFahrenheit} getWeather={this.requestWeather}/>
          </Col>
          <Col className='content' s={3}>
            <ForecastCard {...this.state} getDescription={this.getDescription}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
