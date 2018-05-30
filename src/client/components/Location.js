import React from 'react';

class Location extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        e.preventDefault();
        this.props.onClick(e.target.id);
    }
    render(){
        const {location} = this.props;

        return(
            <button type="button" className="btn btn-white location" id={location.woeid} onClick={this.onClick}>{location.title}</button>
        );
    }
}

export default Location;