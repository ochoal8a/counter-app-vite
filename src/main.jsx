import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";

//import { FirstApp } from "./FirstApp";
//import { HelloWorldApp } from "./HelloWorldApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp name='Channot' /> */}
    <CounterApp value={0}></CounterApp>
  </React.StrictMode>
);
