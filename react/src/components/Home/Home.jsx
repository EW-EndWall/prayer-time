import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import TimeList from "./TimeList";

const Home = (props) => {
  const { selectedCity } = props;
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Prayer Time - Home")}</title>
      </Helmet>

      <div className="md:w-2/4 w-9/12 mx-auto my-3 mt-9 p-3 rounded-lg bg-gray-400 dark:bg-gray-900">
        <TimeList selectedCity={selectedCity} />
      </div>
    </>
  );
};

export default Home;
