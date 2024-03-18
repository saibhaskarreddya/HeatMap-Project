import React, { useState } from 'react';

function TwoDTable() {
  // State for managing the input number
  const [number, setNumber] = useState("");

  // State for storing table rows
  const [tableRows, setTableRows] = useState([]);

  // Event handler for input change
  const handleChange = (event) => {
    setNumber(event.target.value);
  }

  const submitHandler = () => {
    
    setTableRows([]);
    let num=number;

   
    for (let j = 0; j < 11; j++) {
      setTableRows(prevRows => [
        ...prevRows,
        console.log(prevRows+"prevRows"),
        <React.Fragment key={j}>
          <tr>
            <td>{num}x{j} = {num * j}</td>
          </tr>
        </React.Fragment>
      ]);
    }
  }

  return (
    <div>
      <h2>Tables</h2>
      <input type='number' onChange={handleChange} />
      <button type='button' onClick={submitHandler}>OK</button>
      <table border="1">
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}

export default TwoDTable;
