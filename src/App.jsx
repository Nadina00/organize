//import { useState } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./page/Home";
import { NewsPage } from "./page/News";
import { Weather } from "./page/Weather";
import { CurrentWeatherPage } from "./page/CurrentWeather";
import { ContactPage } from "./page/ContactPage";
import { LoginPage } from "./page/LoginPage";
import { RegisterPage } from "./page/RegisterPage";

function App() {
  return (
    <>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/current/:cityLoc" element={<CurrentWeatherPage />} />
      </Routes>
    </>
  );
}

export default App;
