const location = "Buenos Aires,ar";
const api_key = "ca828cdbf57dfd6382aeb3f5d266f7dc";
const url_base_weather= "https://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;
