import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import "./Layout.css";

const Layout = () => {
  return (
    <>
    <header>
    <h1>beIN</h1></header>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">Main</Link>
          </li>
          <li>
            <Link to="login">login</Link>
          </li>
          <li>
            <Link to="payment">payment</Link>
          </li>
          <label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>


        </ul>
      </nav>
      

      <Outlet />
    </>
  )
};

export default Layout;