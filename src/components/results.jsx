import React, { useState, useEffect } from 'react';
import EnteredEmails from './enteredEmails';

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
            // console.log('parsed json', json)
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

    const handleKeyDown = e => {
        e.preventDefault();
        let enteredEmail = value.trim();
            if(enteredEmail) {
                setEnteredEmails((enteredEmails) => [...enteredEmails, {email: enteredEmail, isValid: isValid(enteredEmail)}]);
            }   
    }

    const handleOnClick = e => {
        let enteredEmail = e.currentTarget.textContent.trim();
        if(enteredEmail) {
            setEnteredEmails((enteredEmails) => [...enteredEmails, {email: enteredEmail, isValid: isValid(enteredEmail)}]);
        }
    }

    const addEmail = e => {
        if (e.currentTarget.textContent){
            handleOnClick(e);
        }   
        else if (['Enter', ','].includes(e.key)) {
            handleKeyDown(e);
        }
    }

    const handleDelete = removeEmail => {
        setEnteredEmails(enteredEmails.filter((email) => (email.email !== removeEmail)));
    }

    const isEmail = enteredEmail => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(enteredEmail);
      };
    
      const isDuplicate = enteredEmail => { 
        return enteredEmails.some(x => x.email === enteredEmail)
      };
    
      const isValid = enteredEmail => {
        const isValidEmail = isEmail(enteredEmail);
        console.log("isValidEmail", isEmail(enteredEmail));
        const isDuplicateEmail = isDuplicate(enteredEmail);
        console.log("isDuplicateEmail", isDuplicate(enteredEmail));
        if (isValidEmail && !isDuplicateEmail) return true;
        return false;
      };

    return (
        <div>
            <input placeholder='Enter recipients...' onChange={handleChange} onKeyDown={addEmail} value={value} type="text"></input>
            {enteredEmails.map((enteredEmail, i) => (
                <EnteredEmails enteredEmail={enteredEmail} key={i} isValid={isValid} handleDelete={handleDelete} />
            ))}
                <div>---------</div>

       
            {filteredData.map((email, index) => (
                    <div onClick={addEmail} key={index}>{email}</div>
                ))}
        </div>
    )
        
}