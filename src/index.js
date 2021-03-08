import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styled.css";

function App() {
  const [searchLoad, setSearchLoad] = useState([]);
  const [payLoad, setPayLoad] = useState("");

  const apiUrl = `http://api.giphy.com/v1/gifs/search`;
  // const apiKey = "lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja";
  const apiKey = process.env.REACT_APP_GIPHY_KEY

  console.log(process.env.REACT_APP_GIPHY_KEY)

  const fetchData = async () => {
    const response = await axios.get(apiUrl, {
      params: { q: payLoad, api_key: apiKey },
    });
    setSearchLoad(response.data.data);
    console.log("RESPONSE");
    console.log(response.data);
    console.log("SEARCH LOAD");
    console.log(searchLoad);
  };

  return (
    <>
      <div className="header">
        <h1>Simple GIPHY search</h1>
      </div>
      <div className="container">
        <input value={payLoad} className="search" onChange={(e) => setPayLoad(e.target.value)} />
        <span className="button" onClick={fetchData}>Click Here To Fetch</span>

        <div className="images">
          {searchLoad.map((item) => (
            <img src={item.images.downsized.url} />
          ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
