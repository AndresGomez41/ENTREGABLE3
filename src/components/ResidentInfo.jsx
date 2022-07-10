import React, { useState,useEffect  } from 'react';
import axios from 'axios'


const ResidentInfo = url => {
   
    const [data, setData] = useState({})

    useEffect(() => {        
        axios.get(url.url)
            .then(res => setData(res.data))
    },[])
    
    console.log(data)
    return (
        <div className='card'>
            <br />
            <div><img src={data.image} alt="" /></div>
            <div className='infocard-box'>
                <h2>{data.name}</h2>
                <ul>
                    <li><b>Status: </b>{data.status}</li>
                    <li><b>Origin: </b>{data.origin?.name}</li>
                    <li><b>participation in episodes: </b>{data.episode?.length}</li>
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;