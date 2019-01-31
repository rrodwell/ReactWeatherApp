import React, { Component } from 'react';
import { Card, Button } from 'react-materialize';
import { app } from '../../assets/styles/index';
import { mostlySunny } from '../../assets/images/index';

const styles = {
    backgroundImage: `url(${mostlySunny})`
}
class WeatherCard extends Component {
    constructor(){
        super();
        this.state = {
            forecast: 'Mostly Sunny',
            temperature: '75'
        }
    }
    render(){
        return (
            <div className='card' style={styles}>
                <div class='layer'></div>
                <div class='card-content'>
                    <div class="search-wrapper">

                    </div>
                    <div class='metrics'>
                        <Button class='celsius btn'>˚C</Button>
                        <span style={{color:'white'}}>/</span>
                        <Button class='fahrenheit btn disabled'>˚F</Button>
                    </div>
                    <span class="card-title">Hello, World!</span>
                    <p>{this.state.forecast}</p>

                    <div class='row'>
                        <div class='col s8'>
                            <p class='temp'>
                                {this.state.temperature}
                            </p>
                        </div>
                        <div class='col s4'>
                            <p class='degrees'>˚</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherCard;