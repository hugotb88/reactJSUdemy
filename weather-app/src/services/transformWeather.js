import convert from 'convert-units';
import {
    SUN
  }  from './../constants/weathers';


//Function to convert from Kelvin to Centigrade
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(2));
};

//Get the icon, now is only returning SUN
const getWeatherState = weather_data => {
    return SUN;
}


//Function to transform the data from the server to our component
const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main; //if you check the json of resolve.json, you can see from where came this two 
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data); //Hardcoded by the moment
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState
    };

    return data;
}


export default transformWeather;