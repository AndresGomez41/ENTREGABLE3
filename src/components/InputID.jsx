import React, { useState } from 'react';
import axios from 'axios'
import Location from './Location';
import { useEffect } from 'react';
import ResidentInfo from './ResidentInfo';

const InputID = () => {

    const [value, setValue] = useState('')
    const [location, setLocation] = useState({})
    const [residents, setResidents] = useState([])
    const random = Math.floor(Math.random() * 126) + 1

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    },[])

    useEffect(() => {
        setResidents(location.residents)
    },[location])

    const showLocation = () => {
        if( parseInt(value) > 0 ){
            if( parseInt(value) < 127){
                axios.get(`https://rickandmortyapi.com/api/location/${value}`)
                    .then(res => {
                        setLocation(res.data)
                        //setResidents(res.data.residents)
                    })
            }else{
                alert('ID debe ser menor o igual a 126')
            }
        }else{
            alert('ID debe ser mayor o igual a 1')
        }
    }
    console.log(residents)

    const handleEnter = e => {
        if(e.key === 'Enter'){
            showLocation()
        }
    }

    return (
        <div>
            <div className='input-box'>
                <input type = "text" placeholder = "type a location ID"
                    value = {value}
                    onChange = { e => setValue(e.target.value)}
                    onKeyDown = {handleEnter}
                    />
                <button onClick = {showLocation}></button>
            </div>
            <Location location={location}/>
            {location.residents?.map( url => <ResidentInfo url={url} key={url}/>)}

        </div>
    );
};

export default InputID;