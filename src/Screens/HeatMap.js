import React, { useState, useEffect } from "react";
import HeatMap from "react-heatmap-grid";

export default function MyComponent() {
  const [selectedOption, setSelectedOption] = useState('');
  const [name, setName] = useState([]);
  const [dpvalue, setDpvalue] = useState('');

  const myfun = () => {
    const xLabels = new Array(88).fill(0).map((_, i) => `${i}`);
    const xLabelsVisibility = new Array(88).fill(0).map((_, i) => i % 2 === 0);
    const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const data = new Array(yLabels.length)
      .fill(0)
      .map(() =>
        new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
      );

    return (
      <div style={{ fontSize: "13px" }}>
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          xLabelsLocation={"bottom"}
          xLabelsVisibility={xLabelsVisibility}
          xLabelWidth={60}
          data={data}
          squares
          height={45}
          onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
          cellStyle={(background, value, min, max, data, x, y) => ({
            background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
            fontSize: "11.5px",
            color: "#444"
          })}
          cellRender={value => value && <div>{value}</div>}
        />
      </div>
    );
  };

  useEffect(() => {
    fetch('http://localhost:8081/TestMaven/workpage/stocklist')
      .then(response => response.json())
      .then(json => {
        const parsedData = JSON.parse(json.data[0].data);
        const valuesArray = Object.values(parsedData);
        setName(valuesArray);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setDpvalue(event.target.value);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {name.slice(1).map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
      {dpvalue && myfun()}
    </>
  );
}
