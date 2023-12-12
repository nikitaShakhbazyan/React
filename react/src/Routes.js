import React from "react";
import { Route, Routes } from "react-router-dom";
import APP_ROUTES from "./config/routes";
import Details from "./pages/Details/Details"
import Categories from "./components/Categories/Categories";
import Crypto from "./components/CryptoApi/Crypto";

const AppRoutes = () => {
  return (
    <Routes>
      {APP_ROUTES.map((route) => {
        if (route.Guard) {
          return (
            <Route key={route.path} path={route.path} element={<route.Guard>{<route.Component />}</route.Guard>}/>
          );
        }
        return (
          <Route key={route.path} path={route.path} element={<route.Component />}/>
        );
      })}
        <Route path="/products/:id" element={<Details />} />
        <Route path="/categories/:id" element={<Categories/>}/>
        <Route path="/crypto" element={<Crypto/>}/>

    </Routes>
  );
};

export default AppRoutes;

