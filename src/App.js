import React, { Component } from "react";
import "./App.css";

import FancyBorder from "./FancyBorder";

// React class Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyBorder title="Fancy Border Example" bottom={<h3>HELLO</h3>}>
          <h1>Welcome</h1>
          <p>Thank you for visiting our spacecraft!</p>
        </FancyBorder>
      </div>
    );
  }
}

export default App;
