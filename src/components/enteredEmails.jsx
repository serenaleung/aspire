import React from 'react';

export default function EnteredEmails({enteredEmail, i, handleDelete}) {
    return (
        <span key={i}> 
            {enteredEmail.email}
            <span>!</span>
            <button
                type="button"
                onClick={() => handleDelete(enteredEmail.email)}
                >
                x
            </button>    
        </span>
   )
}