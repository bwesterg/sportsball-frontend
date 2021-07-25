import React, { Component } from 'react';
import './App.css';
import LocationContainer from './components/LocationContainer';
const locationsURL = "http://localhost:3000/locations"

class App extends Component {

  state = {
    locations: []
  }

  //Make add, delete, update methods

  deleteLocation = () => {
    
  }

  componentDidMount(){
    this.getLocations()
  }
  
  getLocations = () => {
    fetch(locationsURL)
      .then(response => response.json())
      .then(locations => this.setState({locations}))
  }


  render() {
    return (
      <div className="App">
        <h1>Sportsball App</h1>
        <LocationContainer locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
