import React, { useState } from "react";

function SearchBar() {
  const [payLoad, setPayLoad] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    this.props.search = payLoad;
  };

  console.log(payLoad)

  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={payLoad}
        className="search"
        onChange={(e) => setPayLoad(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
