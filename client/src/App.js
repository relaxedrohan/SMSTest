import "./App.css";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import SortingTable from "./Components/SortingTable";

function App() {
  const [data, setdata] = useState(null);
  const [toggleData, settoggleData] = useState(false);
  useEffect(() => {
    fetch("api/locations")
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);

  return (
    <div className="App">
      <h1>SMS Application</h1>
      <div className="navbar">
        <button
          className="navbar"
          id="getData"
          onClick={() => settoggleData(!toggleData)}
        >
          Get Data
        </button>
        <Navbar />
      </div>
      {toggleData && <SortingTable apidata={data} />}
    </div>
  );
}

export default App;
