import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";

const routes = [
    {
      path: "/home",
      element: <Home />,
    },
  ];

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <Routes>
            {routes.map(({path, element}, key)=>(
                <Route path = {path} element = {element} key = {key} ></Route>
            ))}
        </Routes>
      </Router>
    </div>
  );
};

export default RouteConfig;
