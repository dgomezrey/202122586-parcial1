import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import EnMessages from "./intl/en.json";
import EsMessages from "./intl/es.json";

const language = navigator.language.split(/[-_]/)[0];

const messages = {
  en: EnMessages,
  es: EsMessages,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
