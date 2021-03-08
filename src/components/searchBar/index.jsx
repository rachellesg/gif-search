import React, { useState } from "react";

function SearchBar(e) {
  const [payload, setPayload] = useState('');
    console.log(payload)
  return (
    <>
      <input value={payload} onChange={(e) => setPayload(e.target.value)} />
    </>
  );
}

export default SearchBar;
