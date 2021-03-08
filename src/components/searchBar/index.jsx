import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      payload: "",
    };
  }

  onInputChange(payload) {
    this.setState({ payload });
    this.props.onPayloadChange(payload);
  }
  
  render() {
    return (
      <>
        <input onChange={(e) => this.onInputChange(e.target.value)} />
      </>
    );
  }
}

export default SearchBar;
