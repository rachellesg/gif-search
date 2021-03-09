import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./components/search";
import "./styled.css";

function App() {
  const [payLoad, setPayLoad] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    console.log(payLoad)
    const apiUrl = `http://api.giphy.com/v1/gifs/search`;
    const apiKey = "lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja";
    const fetchData = async () => {
      const response = await axios.get(apiUrl, {
        params: { q: payLoad, api_key: apiKey },
      });
      setsearchResults(response.data.data);
    };
    if (payLoad) {
      fetchData();
    }
  }, [payLoad]);

  return (
    <>
      <div className="header">
        <h1>Simple GIPHY search</h1>
        Key in your search term and be presented with GIFs!
      </div>
      <div className="container">
        <SearchBar payLoad={payLoad} />
        <div className="search--wrapper">
          <input
            value={payLoad}
            className="search"
            onChange={(e) => setPayLoad(e.target.value)}
          />
        </div>

        <div className="images-wrapper">
          {searchResults &&
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
