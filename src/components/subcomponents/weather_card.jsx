import React, { Component } from 'react';
import { Button } from 'react-materialize';
import '../../assets/styles/index';
import { mostlySunny } from '../../assets/images/index';
import { SearchForm } from './index';
import $ from 'jquery';

const styles = {
    card: {
         backgroundImage: `url(${mostlySunny})`
    },
    span: {
        textTransform: 'capitalize',
    }

}
class WeatherCard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    convertToCelsius = () => {
        $('.fahrenheit').removeClass('disabled');
        $('.celsius').addClass('disabled');
        this.props.convertCelsius();
    }

    convertToFahrenheit = () => {
        $('.fahrenheit').addClass('disabled');
        $('.celsius').removeClass('disabled');
        this.props.convertFahrenheit();
    }


    render(){
        return (
            <div className='card' style={styles.card}>
                <div className='layer'></div>
                <div className='card-content'>
                    <div className="search-wrapper">
                        <SearchForm getWeather={this.props.getWeather}/>
                    </div>
                    <div className='metrics'>
                        <Button className='celsius btn' onClick={this.convertToCelsius}>˚C</Button>
                        <Button className='fahrenheit btn disabled' onClick={this.convertToFahrenheit}>˚F</Button>
                    </div>
                    <span className="card-title" style={styles.span}>{this.props.city}, {this.props.state}</span>
                    <p>{this.props.forecast}</p>

                    <div className='row'>
                        <div className='col s8'>
                            <p className='temp'>
                                {this.props.temperature}
                            </p>
                        </div>
                        <div className='col s4'>
                            <p className='degrees'>˚</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;