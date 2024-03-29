import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { TopicsProvider } from "./context/topic.context";
import { PlayersPorvider } from "./context/players.context";
import { DropDownProvider } from "./context/language.context";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DropDownProvider>
      <TopicsProvider>
        <PlayersPorvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PlayersPorvider>
      </TopicsProvider>
    </DropDownProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
