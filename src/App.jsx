import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import RouterList from "./RouterList";

function App() {
  const { i18n } = useTranslation();
  // * create useState
  const [darkMode, setDarkMode] = useState(
    (localStorage?.getItem("theme") == "dark" ? true : false) || false
  );
  const [selectedCity, setSelectedCity] = useState(
    localStorage?.getItem("city") ||
      ("Adana" && localStorage.setItem("city", "Adana"))
  );
  const [selectedLang, setSelectedLang] = useState(
    localStorage?.getItem("language") ||
      ("en" && localStorage.setItem("language", "en"))
  );

  const langList = ["en", "tr"];

  useEffect(() => {
    // * On page load or when changing themes
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    // * On page load or when changing lang
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  return (
    <>
      <div className="h-screen font-medium bg-white dark:bg-gray-800">
        <RouterList
          {...{
            darkMode,
            setDarkMode,
            selectedCity,
            setSelectedCity,
            selectedLang,
            setSelectedLang,
            langList,
          }}
        />
      </div>
    </>
  );
}

export default App;
