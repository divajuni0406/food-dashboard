import React from "react";
import "../components/Dashboard/Dashboard.css";
import TopDashboard from "../components/Dashboard/TopDashboard";
import TableDashboard from "../components/Dashboard/TableDashboard";
import MostOrder from "../components/Dashboard/MostOrder";

const Dashboard = () => {
  return (
    <div className="bg-dashboard">
      <div className="container">
        <div className="content-dashboard-center">
          <TopDashboard />
          <TableDashboard />
          <MostOrder />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
