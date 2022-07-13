
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/nopage";
import Login from "./pages/loginpage";
import Checkout from "./pages/checkout";
import Rewards from "./pages/rewards";
import Profile from "./pages/profile";
import GetCoins from "./pages/getcoins";
import App from "./App";


export default function AppMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Login />} /> 
        <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="getcoins" element={<GetCoins />} />
          <Route path="rewards" element={<Rewards/>} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppMain />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
