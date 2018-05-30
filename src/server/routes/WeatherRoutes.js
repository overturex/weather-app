import WeatherController from '../controllers/WeatherController.js';

export default (app)=>{
    // Search
    app.get('/api/weather/search', (req, res)=>{
        const location = req.query.location;
        WeatherController.getWeatherByLocation(location)
            .then((result)=>{
                res.json(result);
            });
    });

    // Details
    app.get('/api/weather/details/:id', (req, res)=>{
        const id = req.params.id;
        WeatherController.getLocationDetailsById(id)
            .then((result)=>{
                res.json(result);
            });
    });
};