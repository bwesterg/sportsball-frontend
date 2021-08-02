import React from 'react';
import LocationItem from './LocationItem'

export default function LocationContainer({locations, deleteLocation}) {

    const showLocations = () => {
        return locations.map(location => <LocationItem key={location.id} {...location} deleteLocation={deleteLocation}/>)
    }

    return (
        <ul className="location-list">
            {showLocations()}
        </ul>
    )
}