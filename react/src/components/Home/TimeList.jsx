import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const TimeList = (props) => {
  const { selectedCity } = props;
  const { t } = useTranslation();

  // * api url
  // https://aladhan.com/prayer-times-api
  // https://api.aladhan.com/v1/calendarByCity/2024/2?city=Ankara&country=Turkey&method=13

  // * create useState
  const [dataList, setDataList] = useState();
  const [date, setDate] = useState();

  const fetchPrayerTimes = async (yearData, monthData, dayData) => {
    try {
      // const apiUrl = `https://api.aladhan.com/v1/calendarByCity/${yearData}/${monthData}?city=${selectedCity}&country=Turkey&method=13`
      const apiUrl = `https://api.aladhan.com/v1/calendarByCity/${yearData}/${monthData}`;
      // * get api data
      const response = await axios.get(apiUrl, {
        params: {
          city: selectedCity,
          country: "Turkey",
          method: 13, // * http://api.aladhan.com/v1/methods - Diyanet İşleri Başkanlığı, Turkey (experimental)
        },
      });
      // * response api data
      const responseData = response.data.data;
      // * sellect current day data
      const responseDataSellect = responseData[dayData - 1].timings;
      // * edited data
      const responseDataOk = [
        [t("Imsak"), responseDataSellect.Imsak.slice(0, -5)],
        [t("Fajr"), responseDataSellect.Fajr.slice(0, -5)],
        [t("Sunrise"), responseDataSellect.Sunrise.slice(0, -5)],
        [t("Dhuhr"), responseDataSellect.Dhuhr.slice(0, -5)],
        [t("Asr"), responseDataSellect.Asr.slice(0, -5)],
        [t("Maghrib"), responseDataSellect.Maghrib.slice(0, -5)],
        [t("Isha"), responseDataSellect.Isha.slice(0, -5)],
      ];
      // * set useState data
      setDataList(responseDataOk);
      // * save localstorage data
      localStorage.setItem("prayerTimesList", JSON.stringify(responseData));
      localStorage.setItem("dataDate", JSON.stringify([monthData, yearData]));
      // * set useState data
      setDate(`${dayData}.${monthData}.${yearData}`);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  useEffect(() => {
    // * create date
    const dateData = new Date();
    const yearData = dateData.getFullYear();
    const monthData = dateData.getMonth() + 1;
    const dayData = dateData.getDate();

    // * check local data
    const prayerTimesList = localStorage?.getItem("prayerTimesList");
    const dataDate = localStorage?.getItem("dataDate");
    if (
      !prayerTimesList ||
      dataDate[0] != monthData ||
      dataDate[1] != yearData
    ) {
      // * get and set data
      fetchPrayerTimes(yearData, monthData, dayData);
    } else {
      // * get localstorage data
      const responseDataSellect = JSON.parse(localStorage.prayerTimesList)[
        dayData - 1
      ].timings;
      // * edited data
      const responseDataOk = [
        [t("Imsak"), responseDataSellect.Imsak.slice(0, -5)],
        [t("Fajr"), responseDataSellect.Fajr.slice(0, -5)],
        [t("Sunrise"), responseDataSellect.Sunrise.slice(0, -5)],
        [t("Dhuhr"), responseDataSellect.Dhuhr.slice(0, -5)],
        [t("Asr"), responseDataSellect.Asr.slice(0, -5)],
        [t("Maghrib"), responseDataSellect.Maghrib.slice(0, -5)],
        [t("Isha"), responseDataSellect.Isha.slice(0, -5)],
      ];
      setDate(`${dayData}.${monthData}.${yearData}`);
      // * set useState data
      setDataList(responseDataOk);
    }
  }, [selectedCity]);

  return (
    <>
      <div className="p-3 mb-3 text-center capitalize rounded-lg shadow-xl text-slate-500 dark:text-slate-400 font-bold bg-white dark:bg-slate-800">
        {t("date")} : {date}
      </div>
      <ul className="mx-auto flex flex-col gap-3">
        {dataList?.map((item, index) => (
          <li
            key={index}
            className="capitalize p-3 rounded-lg shadow-xl text-slate-500 dark:text-slate-400 text-xs bg-white dark:bg-slate-800"
          >
            <div className="w-4/5 flex gap-3 justify-between mx-auto">
              <span>{item[0]} :</span>
              <span className="italic"> {item[1]}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TimeList;
