import React, { Component } from 'react';
import { weatherIcons } from '../../assets/styles/index';
import { Card, Row, Col } from 'react-materialize';
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
            console.log("storm")
            return <Storm/>
        } else if(mostlySunny.includes(code)){
            console.log("MS")
            return <MostlySunny/>
        } else if(cloudy.includes(code)){
            console.log("cloudy")
            return <Cloudy/>
        } else if(rainy.includes(code)){
            console.log("rainy")
            return <Rainy/>
        } else if(snow.includes(code)){
            console.log("snow")
            return <Snow/>
        } else if(sunShower.includes(code)){
            console.log("ss")
            return <SunShower/>
        } else {
            console.log("sunny")
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