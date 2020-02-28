import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN
  }  from './../../constants/weathers';
import './styles.css';

const location = "Buenos Aires,ar";
const api_key = "ca828cdbf57dfd6382aeb3f5d266f7dc";
const url_base_weather= "https://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

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


    //Function to convert from Kelvin to Centigrade
    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    };

    //Get the icon, now is only returning SUN
    getWeatherState = weather_data => {
        return SUN;
    }


    //Function to transform the data from the server to our component
    getData = weather_data => {
        const { humidity, temp } = weather_data.main; //if you check the json of resolve.json, you can see from where came this two 
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data); //Hardcoded by the moment
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            wind: `${speed} m/s`,
            weatherState
        };

        return data;
    }

    handleUpdateClick = () => {
        //Go to the endpoint
        fetch(api_weather).then( resolve => {
            return resolve.json(); //Returns a new Promise
        }).then(data => {
            const newWeather = this.getData(data);
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