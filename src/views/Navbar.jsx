import React, { useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout, HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActivities";
import "../css/Navbar.css";

const Navbar = () => {
  const [navbarValue, setNavbarValue] = useState("home");
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(login(true));
  };

  return (
    <div className="bg-navbar">
      <div className="menu-navbar">
        <Link className="brand-icon-wrapper">
          <div className="brand-icon">
            <img src="/images/icon/Shop.png" alt="" />
          </div>
        </Link>
        <Link
          className={`icon-navbar-wrapper ${
            navbarValue === "home" ? "icon-navbar-active" : ""
          }`}
          to={"/"}
          onClick={() => setNavbarValue("home")}
        >
          <div className="icon-navbar">
            <HiOutlineHome />
          </div>
        </Link>
        <Link
          className={`icon-navbar-wrapper ${
            navbarValue === "dashboard" ? "icon-navbar-active" : ""
          }`}
          to={"/dashboard"}
          onClick={() => setNavbarValue("dashboard")}
        >
          <div className="icon-navbar">
            <AiFillPieChart />
          </div>
        </Link>
        <Link
          className={`icon-navbar-wrapper ${
            navbarValue === "setting" ? "icon-navbar-active" : ""
          }`}
          to={"/setting"}
          onClick={() => setNavbarValue("setting")}
        >
          <div className="icon-navbar">
            <FiSettings />
          </div>
        </Link>
        <div className="icon-navbar-wrapper"></div>
        <button className="icon-logout-wrapper" onClick={handleLogout}>
          <div className="icon-logout">
            <HiOutlineLogout />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
