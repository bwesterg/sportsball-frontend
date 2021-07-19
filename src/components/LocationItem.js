import React from 'react';

export default function LocationItem({name, baseball, basketball, football, hockey, total_teams, capital}){
    return (
        <li className="location-item">
            <h2>Location: {name}</h2>
            <h4>MLB team(s): {baseball}</h4>
            <h4>NBA team(s): {basketball}</h4>
            <h4>NFL team(s): {football}</h4>
            <h4>NHL team(s): {hockey}</h4>
            <h4>Total professional teams: {total_teams}</h4>
            <h4>Any teams use state capital in their title? {capital}</h4>
        </li>
    )
}