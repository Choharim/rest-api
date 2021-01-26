import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));

    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={getData}>click</button>
    </div>
  );
}

export default App;
