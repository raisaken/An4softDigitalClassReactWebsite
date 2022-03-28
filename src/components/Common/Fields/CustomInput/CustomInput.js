import React, { useState } from "react";
import "./Custominput.css"

export const CustomNameInput = ({ type, name, placeholder }) => {
  
  const [ value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  console.log(value);
  
  return <input className="input" type={type} name={name} placeholder={placeholder || ""} onChange={handleChange}/>;
};
