import React from 'react';

const Location = ({location}) => {

    
    return (
        <div className='location-box'>
            <h2>{location.id}: {location.name}</h2>
            <div className='location-info'>
                <div><b>type: </b>{location.type}</div>
                <div><b>dimension: </b>{location.dimension}</div>
                <div><b>population: </b>{location.residents?.length}</div>
            </div>
        </div>
    );
};

export default Location;