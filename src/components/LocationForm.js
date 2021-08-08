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

    componentDidMount(){
        const{location} = this.props
        if(this.props.location){
            const{id, name, baseball, basketball, football, hockey, capital, total_teams} = location
            this.setState({
                id,
                name,
                baseball,
                basketball,
                football,
                hockey,
                capital,
                total_teams
            })
        }
    }

    handleChange = (event) => {
        let {name, value, checked} = event.target
        value = (name === "capital") ? checked : value
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitAction(this.state)
        if(this.props.handleToggle){
            this.props.handleToggle()
            
        }
    }

    render() {
        const {name, baseball, basketball, football, hockey, capital, total_teams} = this.state
        return(
            <form className="location-form" onSubmit={this.handleSubmit}>
                {this.props.location ? <h2>Edit Location</h2> : <h2>Add a new Location</h2>}
                <label>Name (US State)</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>
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