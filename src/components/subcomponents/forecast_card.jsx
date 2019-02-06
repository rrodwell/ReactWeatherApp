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
        let desc = this.props.getDescription(code);
        if(desc.toUpperCase() === 'STORM'){
            return <Storm/>
        } else if(desc.toUpperCase() === 'OVERCAST'){
            return <MostlySunny/>
        } else if(desc.toUpperCase() === 'CLOUDY'){
            return <Cloudy/>
        } else if(desc.toUpperCase() === 'RAIN'){
            return <Rainy/>
        } else if(desc.toUpperCase() === 'SNOW'){
            return <Snow/>
        } else if(desc.toUpperCase() === 'LIGHT RAIN'){
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