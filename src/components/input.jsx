import React from 'react';

export default function Input({enteredEmails, handleChange, addEmail, value}) {

    return (
      <input
          className={"input"}
          placeholder={enteredEmails.length > 0 ? "" : "Enter recipients..."}
          onChange={handleChange}
          onKeyDown={addEmail}
          value={value}
          type="text"
      ></input>
    )
}