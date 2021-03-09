import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styled.css";

function App() {
  const [searchResults, setsearchResults] = useState([]);
  const [payLoad, setPayLoad] = useState("");

  const apiUrl = `http://api.giphy.com/v1/gifs/search`;
  const apiKey = "lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja";

  const fetchData = async () => {
    if (payLoad === "") {
      alert("You have to enter a search term!");
    }
    const response = await axios.get(apiUrl, {
      params: { q: payLoad, api_key: apiKey },
    });
    setsearchResults(response.data.data);
    // console.log("RESPONSE");
    console.log(response.data);
    // console.log("SEARCH LOAD");
    // console.log(searchResults);
  };

  return (
    <>
      <div className="header">
        <h1>Simple GIPHY search</h1>
      </div>
      <div className="container">
        <div className="search--wrapper">
          <input
            value={payLoad}
            className="search"
            onChange={(e) => setPayLoad(e.target.value)}
          />
          <div className="button" onClick={fetchData}>
            Search GIPHY
          </div>
        </div>

        <div className="images-wrapper">
          {payLoad === ""
            ? ""
            : searchResults &&
              searchResults.map((item, index) => (
                <div key={index} className="image">
                  <img alt={item.title} src={item.images.downsized.url} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
