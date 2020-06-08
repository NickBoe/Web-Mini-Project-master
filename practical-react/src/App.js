import React, { useState, useRef } from "react";
import TodoList from "./TodoList.js";
import uuidv4 from "uuid/v4";

function App() {
  return (
    <>
      <TodoList todos />
      <button> Add Todo</button>
      <div>0 left </div>
    </>
  );
}

export default App;
