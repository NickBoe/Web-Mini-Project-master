import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Home from "./Home";
import Portfolio2 from "./Portfolio2";
import Contact from "./Contact";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <div className="App">
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
        </head>
      <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio2" component={Portfolio2} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
