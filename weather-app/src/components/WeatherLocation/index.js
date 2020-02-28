import React, {Component} from 'react';
import transformWeather from './../../services/transformWeather'
import {api_weather} from './../../constants/api_url'; //We use {} when we donts use export default in the elemt to import, in this case api_url
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN
  }  from './../../constants/weathers';
import './styles.css';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 25,
    wind: '10 m/s'
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
        //Go to the endpoint
        fetch(api_weather).then( resolve => {
            return resolve.json(); //Returns a new Promise
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(data); //is the resolve.json

            //assigns the new values to state of the component
            this.setState({
                data: newWeather
            });
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