import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
  IonHeader,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";

// import RouterList from "./RouterList";
import Header from "./components/Header";

import HomeComponent from "./components/Home/";
import OptionMenuComponent from "./components/options/OptionMenu";
import SellectThemeComponent from "./components/options/SellectTheme";
import SellectLangComponent from "./components/options/SellectLang";
import SellectCityComponent from "./components/options/SellectCity";

/* Ionic CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/palettes/dark.system.css";

setupIonicReact();

const App = () => {
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
    i18n.changeLanguage(selectedLang);
  }, [selectedLang]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <Header />
        </IonHeader>

        <IonRouterOutlet
          className="h-screen font-medium bg-white dark:bg-gray-800 mt-14"
          animated="false"
        >
          <Route path="/home" exact>
            <HomeComponent {...{ selectedCity }} />
          </Route>
          <Route path="/options" exact>
            <OptionMenuComponent />
          </Route>
          <Route path="/options/theme" exact>
            <SellectThemeComponent {...{ darkMode, setDarkMode }} />
          </Route>
          <Route path="/options/sellected-lang" exact>
            <SellectLangComponent
              {...{ selectedLang, setSelectedLang, langList }}
            />
          </Route>
          <Route path="/options/sellected-cities" exact>
            <SellectCityComponent {...{ selectedCity, setSelectedCity }} />
          </Route>

          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
