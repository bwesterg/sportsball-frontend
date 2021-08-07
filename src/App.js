import React, { Component } from 'react';
import './App.css';
import LocationContainer from './components/LocationContainer';
import LocationForm from './components/LocationForm';
const locationsURL = "http://localhost:3000/locations";

class App extends Component {

  state = {
    locations: []
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

  updateLocation = (updatedLocation) => {
    let locations = this.state.locations.map(location => location.id === updatedLocation.id ? updatedLocation : location)
    
    this.setState({ locations })
  }

  deleteLocation = (id) => {
    let filteredLocations = this.state.locations.filter(location => location.id !== id)
    this.setState({
      locations: filteredLocations,
    })
    fetch(locationsURL + "/" + id, {method: "DELETE"})
  }

  render() {
    return (
      <div className="App">
        <h1>Sportsball App</h1>
        <LocationForm addLocation={this.addLocation} />
        <LocationContainer updateLocation={this.updateLocation} deleteLocation={this.deleteLocation} locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
