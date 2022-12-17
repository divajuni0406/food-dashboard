import React, { useState, useEffect } from "react";
import "./MostType.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import ApexCharts from "apexcharts";

const MostType = ({ isShowAll }) => {
  const [whereToEatDrop, setWhereToEatDrop] = useState("Today");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    let chart = document.getElementById("chart");

    while (chart.firstChild) chart.removeChild(chart.firstChild);
    let orderList = {
      chart: {
        height: 280,
        width: "100%",
        type: "radialBar",
      },
      colors: ["#FFCF00", "#FFA900", "#DF8109"],
      series: [54, 80, 90],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "55%",
            background: "#1f1d2b",
          },
          track: {
            background: "#393c49",
            margin: 1,
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Dine In", "To Go", "Delivery"],
    };

    new ApexCharts(document.querySelector("#chart"), orderList).render();
  }, []);
  return (
    <div
      className={`type-order-wrapper ${isShowAll ? "type-order-hidden" : ""}`}
    >
      <div className="top-type-order">
        <h1>Most Type of Order</h1>
        <div className="choose-dish-area">
          <div
            className="btn-dropdown-eat"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            <span>
              {toggleDropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
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
      <div className="divider-most-type"></div>
      <div className="chart-area">
        <div id="chart"></div>
        <div>sdsdsd sdsd</div>
      </div>
    </div>
  );
};

export default MostType;
