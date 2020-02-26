import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD, 
    CLOUDY,
    SUN, 
    RAIN,
    SNOW,
    WINDY
  }  from './../../../constants/weathers';
  import './styles.css';

//Dictionary for icons names
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
};

//Function to get icon according the weather state received
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if(icon)
        return <WeatherIcons className ="wicon" name={icon} size="2x" />;
    else
        return <WeatherIcons className ="wicon" name={"day-sunny"} size="2x"/>
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className = "weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className= "temperature">{`${temperature}`}</span>
        <span className= "temperatureType">{`C°`}</span>
    </div>
);

//Definition of PropTypes, parameters and types
WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;