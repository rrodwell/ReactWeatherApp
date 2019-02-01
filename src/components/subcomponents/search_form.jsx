import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import $ from 'jquery';


class SearchForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    handleSearch = (e,value) => {
        this.setState({value:value})
    }

    submitSearch = () => {
        console.log(this.state.value);
        this.props.getWeather(this.state.value);
        this.setState({value:''});
        $('label').removeClass('active');
    }

    render(){
        return (
            <Row className='search-form'>
                <Input s={12} type='text' label='Search' id='search' onChange={this.handleSearch} value={this.state.value}/>
                <Button className='search-btn' onClick={this.submitSearch} icon='search'></Button>
            </Row>
        )
    }
}

export default SearchForm;
