import React, { Component } from "react";

import FancyBorder from "./FancyBorder";
import SplitPane from "./SplitPane";
import Chat from "./Chat";
import Contacts from "./Contacts";

import "./App.css";

// React class Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyBorder>
          <h1>Welcome</h1>
          <p>Thank you for visiting our spacecraft!</p>
        </FancyBorder>

        <SplitPane left={<Contacts />} right={<Chat />} />
        {/* We can also pass components as props */}
      </div>
    );
  }
}

export default App;
