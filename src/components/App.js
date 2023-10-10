import React, { useState } from "react";
import "../styles/App.css";
export function App() {
  const [data, setData] = useState([]);
  const [shape, setShape] = useState("square");
  function handleChange(e) {
    setShape(e.target.value);
    console.log(shape);
  }
  function handleClick() {
    console.log(shape);
    setData([...data, shape]);
    setShape(shape);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleChange}>
          <option value={"square"}>Square</option>
          <option value={"circle"}>Circle</option>
        </select>
        <button onClick={handleClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {data.length > 0 &&
          data.map((val, index) => {
            return <div className={val}>{index}</div>;
          })}
      </div>
    </div>
  );
}
