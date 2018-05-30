import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            location: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        e.preventDefault();
        this.setState({location: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const {onSubmit} = this.props;
        const {location} = this.state;

        onSubmit(location);
    }
    render(){
        return(
            <form className="search" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" id="search-location" placeholder="enter a location" onChange={this.onChange}/>
                    <button type="submit" id="search-button" className="btn">search</button>
                </div>
            </form>
        );
    }
}

export default Search;