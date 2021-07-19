import React from 'react';
import LocationItem from './LocationItem'

export default function LocationContainer({locations}) {

    const showLocations = () => {
        return locations.map(location => <LocationItem key={location.id} {...location} />)
    }

    return (
        <ul className="location-list">
            {showLocations()}
        </ul>
    )
}