import rp from 'request-promise';

const API_URL = 'https://www.metaweather.com/api/';

class WeatherController{
    static getWeatherByLocation(location){
        const url = `${API_URL}/location/search/?query=${location}`;
        return rp.get({
            url: url,
            json: true
        });
    }
    static getLocationDetailsById(id){
        const url = `${API_URL}/location/${id}`;
        return rp.get({
            url: url,
            json: true
        });
    }
}

export default WeatherController;