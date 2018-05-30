import React from 'react';
import Search from './components/Search.js';
import Location from './components/Location.js';
import Forecast from './components/Forecast.js';
import WeatherService from './services/WeatherService.js';


// styles
import './styles/style.scss';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            locations: [],
            selectedLocation: '',
            selectedLocationDetails: '',
            searched: false
        };
        this.search = this.search.bind(this);
        this.getLocationDetails = this.getLocationDetails.bind(this);
    }
    search(searchTerm){
        this.setState({
            locations: [],
            selectedLocation: '',
            selectedLocationDetails: '',
            searched: false
        });
        WeatherService.getWeatherByLocation(searchTerm)
            .then((result)=>{
                this.setState({locations: result, searched: true});
            });
    }
    getLocationDetails(id){
        this.setState({selectedLocation: this.state.locations.find((location)=>location.woeid === parseInt(id))});
        WeatherService.getLocationDetailsById(id)
            .then((result)=>{
                this.setState({selectedLocationDetails: result});
            })
    }
    render(){
        const {locations, selectedLocationDetails, searched} = this.state;

        const renderResult = ()=>{
            if(searched && !selectedLocationDetails) {
                return(
                    <div className="search-result">
                        <p>{locations.length > 0 ? `search results (${locations.length})` : 'no result found!'}</p>
                        <div className="locations">{locations.map((location, index)=><Location location={location} onClick={this.getLocationDetails} key={index}/>)}</div>
                    </div>
                );
            }
        };

        return(
            <div className="app">
                <div className="container">
                    <Search onSubmit={this.search}/>
                    {renderResult()}
                    {selectedLocationDetails ? <Forecast location={selectedLocationDetails}/>:''}
                </div>
            </div>
        );
    }
}

export default App;