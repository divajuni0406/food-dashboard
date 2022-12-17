import React, { useEffect, useState } from "react";
import "./TableDashboard.css";
import { GoSettings } from "react-icons/go";
import customers from "../../customer.json";
import _ from "lodash";

const TableDashboard = () => {
  const [reportOrders, setReportOrders] = useState([]);
  const [sortType, setSortType] = useState("desc");

  const sortOrder = () => {
    if (sortType == "asc") {
      setSortType("desc");
    } else {
      setSortType("asc");
    }

    let listReportOrders = _.orderBy(reportOrders, ["status"], [sortType]);
    setReportOrders(listReportOrders);
  };

  useEffect(() => {
    setReportOrders(customers);
  }, [customers]);
  return (
    <>
      <div className="order-report-wrapper">
        <div className="order-title-general">
          <div className="order-title-wrapper">
            <h1>Order Report</h1>
            <button className="btn-filter" onClick={() => sortOrder()}>
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
                {reportOrders.map((data, index) => (
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
