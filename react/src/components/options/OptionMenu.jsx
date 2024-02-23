import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MenuList from "./MenuList";

const OptionMenu = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // * url path check
  const currentPath = location.pathname.split("/").length > 2;

  const navigate = useNavigate();
  // * getback page
  const handleGoBack = () => {
    navigate(-1) || navigate("/", { replace: true });
  };

  return (
    <>
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
      {!currentPath && (
        <>
          <MenuList />
        </>
      )}
      <Outlet />
    </>
  );
};

export default OptionMenu;
