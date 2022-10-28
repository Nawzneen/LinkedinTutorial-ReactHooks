import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const TreesContext = createContext();
const trees = [
  { id: "1", type: "maple" },
  { id: "2", type: "oak" },
  { id: "3", type: "some" },
  { id: "4", type: "ea" },
];

function AppTest() {
  // Practicing Creating Context

  //END of Practicing Creating Context
  return (
    <div>
      <h1>Trees i have heard of</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
    <AppTest />
  </TreesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
