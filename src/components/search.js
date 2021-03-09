import React, { useState } from "react";

function SearchBar() {
  const [payLoad, setPayLoad] = useState("");

  return (
    <input
      value={payLoad}
      className="search"
      onChange={(e) => setPayLoad(e.target.value)}
    />
  );
}

export default SearchBar;
