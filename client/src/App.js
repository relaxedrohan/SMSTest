import "./App.css";
//import Table from "./Components/Table";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
import SortingTable from "./Components/SortingTable";

function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch("api/locations")
      .then((res) => res.json())
      .then((data) => setdata(data.data));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>SMS Application</h1>
      <Navbar />
      {data && <SortingTable apidata={data} />}
    </div>
  );
}

export default App;
