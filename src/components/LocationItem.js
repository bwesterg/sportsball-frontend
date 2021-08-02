import React from 'react';

export default function LocationItem({id, name, baseball, basketball, football, hockey, total_teams, capital, deleteLocation}){

    const handleClick = (event) => deleteLocation(id)

    return (
        <li className="location-item">
            <h2>Location: {name}</h2>
            <h4>MLB team(s): {baseball}</h4>
            <h4>NBA team(s): {basketball}</h4>
            <h4>NFL team(s): {football}</h4>
            <h4>NHL team(s): {hockey}</h4>
            <h4>Total professional teams: {total_teams}</h4>
            <h4>Any teams use state capital in their title? {capital}</h4>
            <button onClick={handleClick} className="delete-button">DELETE LOCATION</button>
        </li>
    )
}