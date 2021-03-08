import React, { useState } from "react";

function SearchBar(e) {
  const [payload, setPayload] = useState('');

  return (
    <>
      <input onChange={(e) => this.onInputChange(e.target.value)} />
    </>
  );
}

export default SearchBar;
