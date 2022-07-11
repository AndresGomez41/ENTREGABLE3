import React, { useState,useEffect  } from 'react';
import axios from 'axios'


const ResidentInfo =({url}) => {
   
    const [data, setData] = useState({})
    const [color, setColor] = useState('gray')
    
    useEffect(() => {        
        axios.get(url)
        .then(res => setData(res.data))            
    },[])
    
    useEffect(()=>{
        changeStatus()
    },[data])
    
    const changeStatus = () => {
        if(data.status === `Dead`)
        {
            setColor('red')
        }else if(data.status === `Alive`){
            setColor(`green`)
        }
    }

    console.log(data)
    return (
        <div className={`card`} >
            <br />
            <div className='img-box'><img src={data.image} alt="" /></div>
            <div className='infocard-box' >
                <h3 > {data.name}</h3>
                <div className={`status ${color}`}></div>
                <ul>
                    <li><b>Status: </b>{data.status}</li>
                    <li><b>Origin: </b>{data.origin?.name}</li>
                    <li><b>participation: </b>{data.episode?.length} episode{data.episode?.length !== 1 && 's'}</li>                    
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;