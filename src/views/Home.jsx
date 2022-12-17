import React from "react";
import "../components/Home/TopHome.css";
import Payment from "./modal/Payment";
import TopHome from "../components/Home/TopHome";
import OrderHome from "../components/Home/OrderHome";

const Home = () => {
  return (
    <div className="bg-home">
      <Payment />
      <div className="container">
        <TopHome />
      </div>
      <OrderHome />
    </div>
  );
};

export default Home;
