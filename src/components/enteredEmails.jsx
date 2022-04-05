import React, { useState } from 'react';

export default function EnteredEmails({enteredEmail, i, handleDelete}) {
    const [showClose, setShowClose] = useState("hidden");
    const showButton = e => {
        e.preventDefault();
        setShowClose("showClose");
      };
    
      const hideButton = e => {
        e.preventDefault();
        setShowClose("hidden");
      };

    return (
        <span 
            className={`chip ${
            enteredEmail.email ? "bold" : "normal"
            } chipBackground ${enteredEmail.isValid ? "normal" : "warning"}`}
            onMouseEnter={e => showButton(e)}
            onMouseLeave={e => hideButton(e)}
            key={i}
        > 
            {enteredEmail.email}
            <span className={`${enteredEmail.isValid ? "hidden" : "warningIcon bold"}`}>!</span>
            <button
                className={showClose}
                type="button"
                onClick={() => handleDelete(enteredEmail.email)}
                >
                x
            </button>    
        </span>
   )
}