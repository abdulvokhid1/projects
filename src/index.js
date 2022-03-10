import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { State } from "./components/State";
import Hooks from "./components/Hooks";
// import Truck from './Truck'
import { Root } from "./root/Root";

ReactDOM.render(
  <React.StrictMode>
    {/* <Root /> */}
    {/* <Truck/> */}
    {/* <State /> */}
    <Hooks />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
