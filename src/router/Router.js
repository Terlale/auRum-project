import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Ship } from "../pages/Ship";
import { Career } from "../pages/Career";
import { ShipAgency } from "../pages/ShipAgency";
import { PortService } from "../pages/PortService";
import { Connect } from "../pages/Connection";
import { Galaries } from "../pages/Galaries";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/ship" element={<Ship/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/shipAgency" element={<ShipAgency/>} />
        <Route path="/portService" element={<PortService/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="/galaries" element={<Galaries/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

