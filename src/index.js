import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchBar";
import axios from "axios";

function App() {
  const [searchLoad, setSearchLoad] = useState(undefined);
  const [payLoad, setPayLoad] = useState("");

  const apiUrl = `http://api.giphy.com/v1/gifs/search`;
  const apiKey = "lhi5oCffHG3ybpyeuZUmvlVqxXS5nWja";

  const fetchData = async () => {
    const response = await axios.get(apiUrl, {
      params: { q: payLoad, api_key: apiKey },
    });
    setSearchLoad(response.data);
    console.log("RESPONSE");
    console.log(response.data);
    console.log("SEARCH LOAD");
    console.log(searchLoad.data);
  };

  return (
    <>
      Hello <br />
      <input value={payLoad} onChange={(e) => setPayLoad(e.target.value)} />
      <span onClick={fetchData}>Click Here To Fetch</span>
      {searchLoad.map((item) => (
        <div>
          <img src={item.url} />
        </div>
      ))}
      {/* {payLoad} {searchLoad.data} */}
      {/* { searchLoad.data && searchLoad.data.map(item => <>{item.image.downsized.url}</>)} */}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
