import { IonPage, useIonRouter } from "@ionic/react";

import { useTranslation } from "react-i18next";
import React from "react";

const SellectLang = (props) => {
  const { selectedLang, setSelectedLang, langList } = props;
  const { t, i18n } = useTranslation();

  const router = useIonRouter();
  // * getback page
  const handleGoBack = () => {
    if (router.canGoBack()) router.goBack();
    else router.push("/", "root");
  };

  const toogleLang = (e) => {
    const sellect = e.target.value;
    // * set lang data
    setSelectedLang(sellect);
    // * local save lang data
    localStorage.setItem("language", sellect);
    // * changle lang
    i18n.changeLanguage(sellect);
  };

  return (
    <IonPage>
      <div>
        <div className="flex gap-5 items-center p-3 border-b-2 text-gray-700 dark:text-gray-400">
          <button onClick={handleGoBack}>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
            </svg>
          </button>
          <h2 className="uppercase">{t("settings")}</h2>
        </div>
        <div className="mx-3 py-1">
          <label className="capitalize block my-2 text-sm font-medium text-gray-900 dark:text-white">
            {t("language")}
          </label>
          <select
            onChange={toogleLang}
            value={selectedLang}
            className="w-full p-3 uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {langList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </IonPage>
  );
};

export default SellectLang;
