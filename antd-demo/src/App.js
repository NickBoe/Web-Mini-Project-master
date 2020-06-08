import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Portfolio from "./Portfolio";
import Portfolio2 from "./Portfolio2";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Route exact path="/home" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/portfolio2" component={Portfolio2} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
