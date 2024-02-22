import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import SellectDataList from "./SellectDataList";

const SellectCity = (props) => {
  const { selectedCity, setSelectedCity } = props;
  const { t } = useTranslation();

  const toogleCity = (e) => {
    const sellect = e.target.value;
    // * set city data
    setSelectedCity(sellect);
    // * local save city data
    localStorage.setItem("city", sellect);
  };

  return (
    <>
      <Helmet>
        <title>{t("Prayer Time - City Setting")}</title>
      </Helmet>
      <div className="mx-3 py-1">
        <label className="block capitalize my-2 text-sm font-medium text-gray-900 dark:text-white">
          {t("city")}
        </label>
        <select
          onChange={toogleCity}
          value={selectedCity}
          className="w-full p-3 uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {SellectDataList.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SellectCity;
