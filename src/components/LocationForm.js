import React, { Component } from 'react' 

const initialState = {
    name: "", 
    baseball: "", 
    basketball: "",
    football: "", 
    hockey: "", 
    capital: false, 
    total_teams: 0, 
}


export default class LocationForm extends Component{

    state = initialState

    handleChange = (event) => {
        let {name, value, checked} = event.target

        value = (name === "capital") ? checked : value

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addLocation(this.state)
    }

    render() {
        const {location, baseball, basketball, football, hockey, capital, total_teams} = this.state
        return(
            <form className="location-form" onSubmit={this.handleSubmit}>
                <h2>Add a new Location</h2>
                <label>Name (US State)</label>
                <input type="text" name="name" value={location} onChange={this.handleChange}/>
                <label>Baseball Team(s)</label>
                <input type="text" name="baseball" value={baseball} onChange={this.handleChange}/>
                <label>Basketball Team(s)</label>
                <input type="text" name="basketball" value={basketball} onChange={this.handleChange}/>
                <label>Football Team(s)</label>
                <input type="text" name="football" value={football} onChange={this.handleChange}/>
                <label>Hockey Team(s)</label>
                <input type="text" name="hockey" value={hockey} onChange={this.handleChange}/>
                <div className="capital-input" >
                    <label>US State Capital in Any Names?</label>
                    <input type="checkbox" name="capital" checked={capital} onChange={this.handleChange}/>
                </div>
                <label>Total Major League Teams</label>
                <input type="number" name="total_teams" value={total_teams} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}