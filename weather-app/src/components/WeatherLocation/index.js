import React from 'react';
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

const WeatherLocation = () => (
    <div className= "weatherLocationCont">
        <Location city={"Barcelona"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;