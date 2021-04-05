import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import SearchBar from "./components/search";
import "./styled.css";

function App() {
  const [searchData, setSearchData] = useState("");
  const [searchResults, setsearchResults] = useState([]);

  useEffect(() => {
    const apiUrl = `http://api.giphy.com/v1/gifs/search`;
    const apiKey = "lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja";
    const fetchData = async () => {
      const response = await axios.get(apiUrl, {
        params: { q: searchData, api_key: apiKey },
      });
      setsearchResults(response.data.data);
    };
    if (searchData) {
      fetchData();
    }
  }, [searchData]);

  return (
    <>
      <div className="header">
        <h1>Search for your favourite GIFs!</h1>
        Just key in your search term and press E N T E R
      </div>
      <div className="container">
        <SearchBar setSearchData={setSearchData} />

        <div className="images-wrapper">
          {searchResults &&
            searchResults.map((item, index) => (
              <div key={index} className="image">
                <img alt={item.title} src={item.images.downsized.url} /> <br />
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
