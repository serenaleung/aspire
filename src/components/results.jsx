import React, { useState, useEffect } from 'react';

export default function Results() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const getData=() => {
        fetch('data.json')
        .then(response => response.json())
        .then(json => {
            setData(json)
            console.log('parsed json', json)
            }
        ).catch(error => {
            console.log("error", error);
        })
    }
    
    useEffect(()=>{
        getData()
    },[])

    const handleChange = e => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input placeholder='Enter recipients...' onChange={handleChange} value={value} type="text"></input> 
            <div>{data}</div>
        </div>
    )
        
}