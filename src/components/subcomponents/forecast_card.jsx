import React, { Component } from 'react';
import { weatherIcons } from '../../assets/styles/index';
import { Card, Row, Col } from 'react-materialize';
import { Sunny, SunShower, MostlySunny, Rainy, Cloudy, Snow, Storm, HighLow } from '../forecasts/index';

class ForecastCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            weeklyForecast: [
                {
                    day:'Monday',
                    text:'sunny_desc',
                    high: '90',
                    low: '65',
                },
                {
                    day:'Tuesday',
                    text:'sunny_desc',
                    high: '90',
                    low: '65',
                }
            ],
        };
    }

    componentDidMount() {

    }

    renderForecast = (desc) => {
        if(desc === 'sunny_desc'){
            return <Sunny/>
        } else if(desc === 'mostly_sunny_desc'){
            return <MostlySunny/>
        } else if(desc === 'cloudy_desc'){
            return <Cloudy/>
        } else if(desc === 'rainy_desc'){
            return <Rainy/>
        } else if(desc === 'snow_desc'){
            return <Snow/>
        } else if(desc === 'storm_desc'){
            return <Storm/>
        } else {
            return <SunShower/>
        }
    }

    render(){
        return (
            <Card className='forecast-card'>
                <div className='forecast-container center'>
                    <Row>
                        {this.state.weeklyForecast.map(forecast =>
                            <div className='forecast'>
                                <p>{forecast.day}</p>
                                {this.renderForecast(forecast.text)}
                                <HighLow high={forecast.high} low={forecast.low}/>
                            </div>
                        )}
                    </Row>
                </div>
            </Card>
        )
    }
}

export default ForecastCard;