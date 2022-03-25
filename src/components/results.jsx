import React, { useState, useEffect } from 'react';

export default function Results() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [enteredEmails, setEnteredEmails] = useState([]);

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
        setValue(e.target.value.toLowerCase());
        if (e.target.value !== '' ) {
            let filteredData = [...data].filter((email) => {
                return email.toLowerCase().includes(e.target.value)
                // return (email.toLowerCase().startsWith(e.target.value)) 
            }) 
        setFilteredData(filteredData);
        } 
    }

    const addEmail = e => {
        if (e.currentTarget.textContent){
            let enteredEmail = e.currentTarget.textContent.trim();
            if(enteredEmail) {
                setEnteredEmails([...enteredEmails, enteredEmail]);
                setValue(e.currentTarget.textContent);
            }
        }   
        else if (['Enter', ','].includes(e.key)) {
            e.preventDefault();
        let enteredEmail = value.trim();
            if(enteredEmail) {
                setEnteredEmails([...enteredEmails, enteredEmail]);
            }   
        }
    }

    const handleDelete = removeEmail => {
        let updateEmails = [...enteredEmails];
        setEnteredEmails(updateEmails.filter(email => email !== removeEmail));
    }

    return (
        <div>
            <input placeholder='Enter recipients...' onChange={handleChange} onKeyDown={addEmail} value={value} type="text"></input>
            {enteredEmails.map((enteredEmail) => 
                    <div key={enteredEmail}>{enteredEmail}
                    <button type="button" onClick={()=>handleDelete(enteredEmail)}>x</button>
                    </div>
            )}  
                <div>---------</div>

       
            {filteredData.map((email, index) => (
                    <div onClick={addEmail} key={index}>{email}</div>
                ))}
        </div>
    )
        
}