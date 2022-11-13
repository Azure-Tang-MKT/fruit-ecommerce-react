import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AppLayout.scss";

const AppLayout = () => {
  return (
    <>
      <div className="nav_bar">
        <h1>Fruit Emporium</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/sellers">Sellers</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default AppLayout;
