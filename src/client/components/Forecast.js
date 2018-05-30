import React from 'react';
import Moment from 'moment';

class Forecast extends React.Component{
    render(){
        const {location} = this.props;

        const renderDay = (day)=>{

            const date = Moment(day.applicable_date);

            return(
                <div className="forecast-day" key={day.id}>
                    <h3 className="date-day">{date.format('ddd')}</h3>
                    <div className="date-month-day">{date.format('MM/DD')}</div>
                    <div className="weather-state">{day.weather_state_name}</div>
                    <div className="temp-max">{Math.round(day.max_temp)}</div>
                    <div className="temp-max">{Math.round(day.min_temp)}</div>
                </div>
            );
        };

        return(
            <div className="forecast">
                <p>5-day weather forecast for {location.title}</p>
                <div className="forecast-days">
                    {location.consolidated_weather.map((day)=>renderDay(day))}
                </div>
            </div>
        );
    }
}

export default Forecast;