import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import { State } from "./components/State";
// import Hooks from "./components/Hooks";
// import Truck from './Truck'
import Root from "./root";
import Root1 from "./root1";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root1 />
    </Router>
    {/* <Root /> */}
    {/* <Truck/> */}
    {/* <State /> */}
    {/* <Hooks /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
