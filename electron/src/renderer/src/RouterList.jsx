import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import OptionMenu from "./components/options/OptionMenu";
import SellectTheme from "./components/options/SellectTheme";
import SellectLang from "./components/options/SellectLang";
import SellectCity from "./components/options/SellectCity";

const RouterList = (props) => {
  const {
    darkMode,
    setDarkMode,
    selectedCity,
    setSelectedCity,
    selectedLang,
    setSelectedLang,
    langList,
  } = props;

  const Layout = () => (
    <>
      <Header />
      <Outlet />
    </>
  );

  const routerUrl = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home selectedCity={selectedCity} />,
        },
        {
          path: "/options",
          element: <OptionMenu />,
          children: [
            {
              path: "theme",
              element: <SellectTheme {...{ darkMode, setDarkMode }} />,
            },
            {
              path: "selected-lang",
              element: (
                <SellectLang {...{ selectedLang, setSelectedLang, langList }} />
              ),
            },
            {
              path: "selected-cities",
              element: <SellectCity {...{ selectedCity, setSelectedCity }} />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerUrl} />

      {/* <BrowserRouter> // bu BrowserRouter app i sarması gerekiyo hata oluyo yoksa
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/options" Component={OptionMenu}>
            <Route
              path="theme"
              element={SellectTheme}
              {...{ darkMode, setDarkMode }}
            />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default RouterList;
