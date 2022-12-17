import React from "react";
import { AiFillPieChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLogout, HiOutlineHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActivities";
import "../css/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathName = location.pathname;

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
            pathName === "/" ? "icon-navbar-active" : ""
          }`}
          to={"/"}
        >
          <div className="icon-navbar">
            <HiOutlineHome />
          </div>
        </Link>
        <Link
          className={`icon-navbar-wrapper ${
            pathName === "/dashboard" ? "icon-navbar-active" : ""
          }`}
          to={"/dashboard"}
        >
          <div className="icon-navbar">
            <AiFillPieChart />
          </div>
        </Link>
        <Link
          className={`icon-navbar-wrapper ${
            pathName === "/setting" ? "icon-navbar-active" : ""
          }`}
          to={"/setting"}
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
