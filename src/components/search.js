import React, { useState } from "react";

function SearchBar({ setSearchData }) {
  const [payLoad, setPayLoad] = useState("");

  const doSubmit = (e) => {
    e.preventDefault();
    setSearchData(payLoad);
  };
  return (
    <form onSubmit={doSubmit}>
      <div className="search--wrapper">
        <input
          value={payLoad}
          className="search"
          onChange={(e) => setPayLoad(e.target.value)}
        />
      </div>
    </form>
  );
}

export default SearchBar;
