import React, { useState, useEffect } from "react";
import "./MostOrder.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import foods from "../../foods.json";
import MostType from "./MostType";

const MostOrder = (props) => {
  const [whereToEatDrop, setWhereToEatDrop] = useState("Today");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false);
  const [textHide, setTextHide] = useState("hide");
  const [isAllFood, setIsAllFood] = useState([]);

  useEffect(() => {
    const hide = foods.slice(0, 3);
    {
      textHide === "hide"
        ? setTimeout(() => {
            setIsAllFood(hide);
          }, 500)
        : setIsAllFood(foods);
    }
  }, [textHide]);

  const handleShowAll = (e) => {
    e.preventDefault();
    setIsShowAll(!isShowAll);
    props.show(!isShowAll);
    {
      isShowAll ? setTextHide("hide") : setTextHide("all");
    }
  };
  return (
    <>
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
        <div className="divider-most-order"></div>
        <div className={`most-food-general ${textHide}`}>
          {isAllFood.map((data, index) => (
            <div className="row most-food-wrapper" key={index}>
              <div className="col-md-3 text-center">
                <div className="most-food-img">
                  <img
                    src={`/images/content/${data.image}`}
                    alt={`${data.image}`}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="most-food-description">
                  <h1>{data.food_name}</h1>
                  <span>{data.stock} dishes ordered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="show-button-wrapper">
          <button
            onClick={handleShowAll}
            className={`${isShowAll ? "btn-hide" : "btn-showAll"}`}
          >
            {isShowAll ? "Hide" : "View All"}
          </button>
        </div>
      </div>
      <MostType isShowAll={isShowAll} />
    </>
  );
};

export default MostOrder;
