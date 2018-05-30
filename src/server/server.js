import express from 'express';
import WeatherRoutes from './routes/WeatherRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('./public'));

app.get('/api', (req, res)=>{
    res.send('api is working');
});

WeatherRoutes(app);

app.listen(port, ()=>{
    console.log(`running at port: ${port}`);
});