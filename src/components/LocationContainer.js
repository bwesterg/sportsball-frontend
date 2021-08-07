import React from 'react';
import LocationItem from './LocationItem'

export default function LocationContainer({locations, deleteLocation, updateLocation}) {

    const showLocations = () => {
        return locations.map(location => <LocationItem key={location.id} {...location} updateLocation={updateLocation} deleteLocation={deleteLocation}/>)
    }

    return (
        <ul className="location-list">
            {showLocations()}
        </ul>
    )
}