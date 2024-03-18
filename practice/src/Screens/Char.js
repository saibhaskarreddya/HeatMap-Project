import React, { useState } from "react";


const Char = () => {

    const [data, setData] = useState('');
    const [showName, setShowName] = useState("");
    // const Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    function changeHandler(event) {
        setData(event.target.value)
    }

    const submitClick = () => {
        const charCounts = {};
        for (let i = 0; i < data.length; i++) {
            const char = data[i];
            if (charCounts[char]) {
                charCounts[char]++;
            } else {
                charCounts[char] = 1;
                console.log(charCounts[char])
            }
        }
        // const charCounts = data.split('').reduce((acc, char) => {
        //     acc[char] = (acc[char] || 0) + 1;
        //     return acc;
        // }, {});

        // Display character counts
        console.log(charCounts);

        // Update showName if needed
        setShowName(JSON.stringify(charCounts));
    }
    // console.log(Array[0])
    return (
        <div>

            <input type="text" name='name' onChange={changeHandler} />
            <button type="submit" onClick={submitClick}>Ok</button><br />
            {showName}
            {/* {charCounts} */}

        </div>
    )
}

export default Char;