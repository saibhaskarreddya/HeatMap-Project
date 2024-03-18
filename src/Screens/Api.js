import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState('');
  const [dropdown, setDropdown] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [alph, setAlph] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
      console.log(data);
  }, []);

  function changeHandler(event) {
    setInput(event.target.value);
  }

  function submitHandler() {
    console.log(input.split(''));
    setAlph(input);
  }

  return (
    <div>
      <input type='text' onChange={changeHandler} />
      <button onClick={submitHandler}>Ok</button>
      <select value={selectedUserId} onChange={(e) => setSelectedUserId(parseInt(e.target.value))}>
        {dropdown.map(number => (
          <option key={number} value={number}>{number}</option>
        ))}
      </select>
      {data && (
        <table border={1}>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map(todo => (
              todo.userId === selectedUserId && todo.title.includes(alph) && (
                <tr key={todo.id}>
                  <td>{todo.userId}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      )}
    </div>

  );
}

export default Api;
