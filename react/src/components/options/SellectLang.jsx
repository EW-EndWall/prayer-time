import { useTranslation } from "react-i18next";
import React from "react";
import { Helmet } from "react-helmet";

const SellectLang = (props) => {
  const { selectedLang, setSelectedLang, langList } = props;
  const { t, i18n } = useTranslation();

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
    <>
      <Helmet>
        <title>{t("Prayer Time - Language Setting")}</title>
      </Helmet>
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
    </>
  );
};

export default SellectLang;
