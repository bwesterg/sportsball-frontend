import React, { Component } from 'react';
import './App.css';
import LocationContainer from './components/LocationContainer';
import LocationForm from './components/LocationForm';
const locationsURL = "http://localhost:3000/locations";

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


  addLocation = (newLocation) => {
    this.setState({
      locations: [...this.state.locations, newLocation]
    })

    fetch(locationsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocation)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sportsball App</h1>
        <LocationForm addLocation={this.addLocation} />
        <LocationContainer locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
