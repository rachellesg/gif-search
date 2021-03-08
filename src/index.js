import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import axios from "axios";

function App() {
  const [payload, setPayload] = useState("");
  const [searchLoad, setSearchLoad] = useState({});

  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${payload}&api_key=lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja`;

  const fetchData = async (payLoad) => {
    const response = await axios.get(apiUrl);
    setSearchLoad(response.data);
    console.log("RESPONSE");
    console.log(response.data);
    console.log("SEARCH LOAD");
    console.log(searchLoad)
  };

  return (
    <>
      Hello <br />
      <input value={payload} onChange={(e) => setPayload(e.target.value)} />
      <span onClick={fetchData}>Click Here To Fetch</span> 
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));