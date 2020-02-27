import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN, WINDY
  }  from './../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "ca828cdbf57dfd6382aeb3f5d266f7dc";
const url_base_weather= "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 25,
    wind: '10 m/s'
}

const data2 = {
    temperature: 40,
    weatherState: WINDY,
    humidity: 14,
    wind: '19 m/s'
}

//Class Component
class WeatherLocation extends Component {
    //When the component is created
    constructor(){
        //always invoked
        super();

        //Partial state of our component
        //this.state only in constructor
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        console.log("Updated");

        //For other functions, we should use this.setState({}) instead of this.state={}
        this.setState({
            city: "Mexico City",
            data: data2,
        });
    }

    render() {
        //Using destructuring
        const { city, data } = this.state;

        return (
            <div className= "weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}
    

export default WeatherLocation;