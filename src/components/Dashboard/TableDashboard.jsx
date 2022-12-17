import React from "react";
import "./TableDashboard.css";
import { GoSettings } from "react-icons/go";

const TableDashboard = () => {
  return (
    <>
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
    </>
  );
};

export default TableDashboard;
