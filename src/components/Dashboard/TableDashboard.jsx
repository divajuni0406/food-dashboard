import React from "react";
import "./TableDashboard.css";
import { GoSettings } from "react-icons/go";
import customer from "../../customer.json";

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
                {customer.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`/images/avatar/${data.image}`}
                        className={`avatar avatar-${data.bg_color}`}
                        alt={`${data.image}`}
                      />{" "}
                      <span>{data.name}</span>
                    </td>
                    <td>
                      <span>{data.menu}</span>
                    </td>
                    <td>
                      <span>{data.total_payment}</span>
                    </td>
                    <td>
                      <p className={`status-table ${data.status}`}>
                        {data.status}
                      </p>
                    </td>
                  </tr>
                ))}
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
