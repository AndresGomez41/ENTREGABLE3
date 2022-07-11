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
            setColor(`greenyellow`)
        }
    }

    console.log(data)
    return (
        <div className={`card`} >
            <br />
            <div className='img-box'><img src={data.image} alt="" /></div>
            <div className='infocard-box' >
                <h3 > {data.name}</h3>
                <ul>
                    <li className='status-box'>
                        <b>Status:</b><span style={{color:color}}>{data.status}</span>
                        <div className={`status ${color}`}></div>
                    </li>
                    <li><b>Origin: </b>{data.origin?.name}</li>
                    <li><b>participation: </b>{data.episode?.length} episode{data.episode?.length !== 1 && 's'}</li>                    
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;