import React, { useState } from "react";
import "./MostType.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const MostType = ({ isShowAll }) => {
  const [whereToEatDrop, setWhereToEatDrop] = useState("Today");
  const [toggleDropdown, setToggleDropdown] = useState(false);
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
        <div>kjakja</div>
        <div>akhkha</div>
      </div>
    </div>
  );
};

export default MostType;
