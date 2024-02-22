import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

// import { BrowserRouter } from "react-router-dom";

// * lang list
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18next.init({
  resources, // * langs
  interpolation: { escapeValue: false },
  // lng: "en", // * sellect lang
  fallbackLng: "en", // * dafault lang
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <I18nextProvider i18n={i18next}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </I18nextProvider>
  </>
);
