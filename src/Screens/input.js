import React, { useState } from 'react';

// import './App.css';

function Input() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");
 
  const handleChange = (event) => {
    setName(event.target.value);
  }
  const submitClick=()=>{
    setShowName(parseInt(name) + 1);
  }

  return (
    <div>
      <input type='Number' onChange={handleChange} />
      <button onClick={submitClick}>Submit</button>
      {showName}
    </div>
  );
}

export default Input;