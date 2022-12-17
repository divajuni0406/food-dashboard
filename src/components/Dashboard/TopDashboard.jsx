import React from "react";
import {
  AiOutlineDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBookmarkMinus } from "react-icons/bi";
import "./TopDashboard.css";
import moment from "moment/moment";

const TopDashboard = () => {
  let currentDate = moment().format("dddd, D MMM, YYYY");

  return (
    <>
      <div className="header-dashboard">
        <h1>Dashboard</h1>
        <span>{currentDate}</span>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="total-revenue-wrapper">
            <div className="top-inside-revenue">
              <span className="icon-revenue dollar">
                <AiOutlineDollarCircle />
              </span>
              <span className="revenue-number">+32.40%</span>
              <span className="icon-2-revenue up">
                <AiOutlineArrowUp />
              </span>
            </div>
            <p className="revenue-price">Rp.151.248.138</p>
            <p className="text-total-revenue">Total Revenue</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="total-revenue-wrapper">
            <div className="top-inside-revenue">
              <span className="icon-revenue bookmark">
                <BiBookmarkMinus />
              </span>
              <span className="revenue-number">-12.40%</span>
              <span className="icon-2-revenue down">
                <AiOutlineArrowDown />
              </span>
            </div>
            <p className="revenue-price">Rp.23,456</p>
            <p className="text-total-revenue">Total Dish Ordered</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="total-revenue-wrapper">
            <div className="top-inside-revenue">
              <span className="icon-revenue people">
                <BsPeople />
              </span>
              <span className="revenue-number">+2.40%</span>
              <span className="icon-2-revenue up">
                <AiOutlineArrowUp />
              </span>
            </div>
            <p className="revenue-price">1,234</p>
            <p className="text-total-revenue">Total Customer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopDashboard;
