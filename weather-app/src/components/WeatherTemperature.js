import React from 'react';
import WeatherIcons from 'react-weathericons';


//Dictionary for icons names
const icons = {
    sunny: "day-sunny",
    fog: "day-fog"
};

//Function to get icon according the weather state received
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    if(icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"sleet"} size="2x"/>
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WeatherTemperature;