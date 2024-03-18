import React, { useState, useEffect } from 'react';
function Login() {


    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [data1, setData1] = useState("");

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function submitHandler() {
        console.log('data', data)

        const jsonData = JSON.stringify(data);

        // Store the JSON string in local storage
        localStorage.setItem('userData', jsonData);

        console.log('Data stored in local storage:', data1);


    }
    useEffect(() => {
        // Retrieve data from local storage
        const storedData = localStorage.getItem('userData');

        // If data exists in local storage, parse it from JSON
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setData1(parsedData);
        }

    }, []);

    return (
        <div>
            <input type='text' name='email' onChange={changeHandler} /><br />
            <input type='password' name='password' onChange={changeHandler} /><br />
            <button type='submit' onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default Login;