import React, { useState } from "react";
import "../css/Dashboard.css";
import {
  AiOutlineDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBookmarkMinus } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const Dashboard = () => {
  const [whereToEatDrop, setWhereToEatDrop] = useState("Dine In");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="bg-dashboard">
      <div className="container">
        <div className="content-dashboard-center">
          <div className="header-dashboard">
            <h1>Dashboard</h1>
            <span>Tuesday, 2 Feb, 2021</span>
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
          <div className="order-report-wrapper">
            <div className="order-title-general">
              <div className="order-title-wrapper">
                <h1>Order Report</h1>
                <button className="btn-filter">
                  <span className="filter-icon">
                    <GoSettings />
                  </span>
                  <span className="text-filter"> Filter Order</span>
                </button>
              </div>
              <div className="table-order">
                <table>
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Menu</th>
                      <th>Total Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table completed">Completed</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="/images/avatar/avatar-1.png"
                          className="avatar"
                          alt=""
                        />{" "}
                        <span>Sofian Hadi</span>
                      </td>
                      <td>
                        <span>Spicy seasoned seafood noodles</span>
                      </td>
                      <td>
                        <span>Rp. 43.000</span>
                      </td>
                      <td>
                        <p className="status-table pending">Pending</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="order-fix"></div>
          </div>
          <div className="most-ordered-wrapper">
            <div className="top-most-order">
              <h1>Most Order</h1>
              <div className="choose-dish-area">
                <div
                  className="btn-dropdown-eat"
                  onClick={() => setToggleDropdown(!toggleDropdown)}
                >
                  <span>
                    {toggleDropdown ? (
                      <RiArrowDropUpLine />
                    ) : (
                      <RiArrowDropDownLine />
                    )}
                  </span>
                  <h4>{whereToEatDrop}</h4>
                  <div
                    className={`dropdown-eat-area ${
                      toggleDropdown ? "dropdown-eat-area-active" : ""
                    }`}
                  >
                    <option
                      value="Today"
                      onClick={(e) => setWhereToEatDrop(e.target.value)}
                    >
                      Today
                    </option>
                    <option
                      value="Tomorrow"
                      onClick={(e) => setWhereToEatDrop(e.target.value)}
                    >
                      Tomorrow
                    </option>
                    <option
                      value="Others"
                      onClick={(e) => setWhereToEatDrop(e.target.value)}
                    >
                      Others
                    </option>
                  </div>
                </div>
              </div>
            </div>
            <div className="most-food-wrapper">
              <div className="row">
                <div className="col-md-3">
                  <div className="most-food-img">
                    <img src="/images/content/cold_5.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="most-food-description">
                    <h1>hahahaha</h1>
                    <span>hahahha</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
