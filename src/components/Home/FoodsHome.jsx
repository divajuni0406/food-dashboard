import React, { useState } from "react";
import "./FoodHome.css";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import foods from "../../foods.json";
import _ from "lodash";

const FoodsHome = ({ dishType }) => {
  const [whereToEatDrop, setWhereToEatDrop] = useState("Dine In");
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <>
      <div className="choose-dish-area mt-4">
        <div className="choose-dish-text">
          <span>Choose Dishes</span>
        </div>
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
              value="Dine In"
              onClick={(e) => setWhereToEatDrop(e.target.value)}
            >
              Dine In
            </option>
            <option
              value="Take It"
              onClick={(e) => setWhereToEatDrop(e.target.value)}
            >
              Take It
            </option>
            <option
              value="Delivery"
              onClick={(e) => setWhereToEatDrop(e.target.value)}
            >
              Delivery
            </option>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row mt-5 general-product">
          {dishType === "hot" || dishType === "cold" ? (
            _.filter(foods, { type: dishType }).map((food, index) => (
              <div className="col-md-4" key={index}>
                <div className="box-menu" id={`box-menu-${dishType}`}>
                  <img src={`/images/Content/${food.image}`} alt="" />
                  <h1>{food.food_name}</h1>
                  <h2>{food.price}</h2>
                  <h3>{`${food.stock} Bowls Available`}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className="not-available-content text-center">
              <span>Content Is Not Available Yet</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodsHome;
