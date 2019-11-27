import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterContainer from "./routers/RouterContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
