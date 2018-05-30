import axios from 'axios';

const API_URL = '/api';

class WeatherService{
    static getWeatherByLocation(location){
        const url = `${API_URL}/weather/search/?location=${encodeURIComponent(location)}`;
        return axios.get(url).then((response)=>response.data);
    }
    static getLocationDetailsById(id){
        const url = `${API_URL}/weather/details/${encodeURIComponent(id)}`;
        return axios.get(url).then((response)=>response.data);
    }
}

export default WeatherService;