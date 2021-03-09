import React, { useState } from "react";

function SearchBar() {
  const [payLoad, setPayLoad] = useState("");

  return (
    <div className="search--wrapper">
      <input
        value={payLoad}
        className="search"
        onChange={(e) => setPayLoad(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
