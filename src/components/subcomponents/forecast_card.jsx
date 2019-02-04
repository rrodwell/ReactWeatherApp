import React, { Component } from 'react';
import '../../assets/styles/index';
import { Card, Row } from 'react-materialize';
import { Sunny, SunShower, MostlySunny, Rainy, Cloudy, Snow, Storm, HighLow } from '../forecasts/index';

class ForecastCard extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    renderForecast = (code) => {
        let rainy = [8,9,10,11,12,17,18,35,45];
        let cloudy = [19,20,21,22,23,24,25,26,27,28,29,30];
        let snow = [5,6,7,13,14,15,16,41,42,43,46];
        let storm = [0,1,2,3,4,47];
        let mostlySunny = [44];
        let sunShower = [37,38,39,40];
        if(storm.includes(code)){
            return <Storm/>
        } else if(mostlySunny.includes(code)){
            return <MostlySunny/>
        } else if(cloudy.includes(code)){
            return <Cloudy/>
        } else if(rainy.includes(code)){
            return <Rainy/>
        } else if(snow.includes(code)){
            return <Snow/>
        } else if(sunShower.includes(code)){
            return <SunShower/>
        } else {
            return <Sunny/>
        }
    }

    render(){
        return (
            <Card className='forecast-card'>
                <div className='forecast-container center'>
                    <Row>
                        {this.props.weeklyForecast.map(forecast =>
                            <div className='forecast' key={forecast.day}>
                                <p>{forecast.day}</p>
                                {this.renderForecast(forecast.code)}
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