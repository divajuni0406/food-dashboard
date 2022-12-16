import React from "react";
import "../css/Dashboard.css";
import {
  AiOutlineDollarCircle,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BiBookmarkMinus } from "react-icons/bi";
import { GoSettings } from "react-icons/go";

const Dashboard = () => {
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
                        <img src="/images/avatar/avatar-1.png" alt="" />{" "}
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
                        <img src="/images/avatar/avatar-1.png" alt="" />{" "}
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
                        <img src="/images/avatar/avatar-1.png" alt="" />{" "}
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
                        <img src="/images/avatar/avatar-1.png" alt="" />{" "}
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
                  </tbody>
                  {/* <tr>
                    <th className="col-4">
                      <div className="customer-table">
                        <img src="/images/avatar/avatar-1.png" alt="" />
                        <p>Sofian Hadi</p>
                      </div>
                    </th>
                    <td className="col-2">
                      <p className="text-table">
                        Spicy seasoned seafood noodles
                      </p>
                    </td>
                    <td className="col-3 text-center">
                      <p className="text-table">Rp. 43.000</p>
                    </td>
                    <td className=" col-2">
                      <p className="status-table completed">Completed</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="col-4">
                      <div className="customer-table">
                        <img src="/images/avatar/avatar-1.png" alt="" />
                        <p>Sofian Hadi</p>
                      </div>
                    </th>
                    <td className="col-2">
                      <p className="text-table">
                        Spicy seasoned seafood noodles
                      </p>
                    </td>
                    <td className="col-3 text-center">
                      <p className="text-table">Rp. 43.000</p>
                    </td>
                    <td className=" col-2">
                      <p className="status-table completed">Completed</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="col-4">
                      <div className="customer-table">
                        <img src="/images/avatar/avatar-1.png" alt="" />
                        <p>Sofian Hadi</p>
                      </div>
                    </th>
                    <td className="col-2">
                      <p className="text-table">
                        Spicy seasoned seafood noodles
                      </p>
                    </td>
                    <td className="col-3 text-center">
                      <p className="text-table">Rp. 43.000</p>
                    </td>
                    <td className=" col-2">
                      <p className="status-table completed">Completed</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="col-4">
                      <div className="customer-table">
                        <img src="/images/avatar/avatar-1.png" alt="" />
                        <p>Sofian Hadi</p>
                      </div>
                    </th>
                    <td className="col-2">
                      <p className="text-table">
                        Spicy seasoned seafood noodles
                      </p>
                    </td>
                    <td className="col-3 text-center">
                      <p className="text-table">Rp. 43.000</p>
                    </td>
                    <td className=" col-2">
                      <p className="status-table completed">Completed</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="col-4">
                      <div className="customer-table">
                        <img src="/images/avatar/avatar-1.png" alt="" />
                        <p>Sofian Hadi</p>
                      </div>
                    </th>
                    <td className="col-2">
                      <p className="text-table">
                        Spicy seasoned seafood noodles
                      </p>
                    </td>
                    <td className="col-3 text-center">
                      <p className="text-table">Rp. 43.000</p>
                    </td>
                    <td className=" col-2">
                      <p className="status-table completed">Completed</p>
                    </td>
                  </tr> */}
                </table>
              </div>
              {/* <div className="tableHead-wrapper">
                <span className="customer">Customer</span>
                <span className="menu">Menu</span>
                <span className="total">Total Payment</span>
                <span className="status">Status</span>
                <div className="divider-table"></div>
              </div> */}
            </div>
            <div className="order-fix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
