import React, { useState, useEffect } from "react";
import "./TopSetting.css";
import { Link } from "react-router-dom";
import { GoSettings } from "react-icons/go";
import { useDispatch } from "react-redux";
import { DishType } from "../../redux/actions/userActivities";

const TopSetting = () => {
  const [dishType, setDishType] = useState("hot");

  const dispatch = useDispatch();

  useEffect(() => {
    let hot = document.querySelector("#hot");
    let cold = document.querySelector("#cold");
    dispatch(DishType(dishType));

    if (dishType === "hot") {
      hot.classList.add("nav-food-active");
      cold.classList.remove("nav-food-active");
    } else if (dishType === "cold") {
      hot.classList.remove("nav-food-active");
      cold.classList.add("nav-food-active");
    } else {
      hot.classList.remove("nav-food-active");
      cold.classList.remove("nav-food-active");
    }
  }, [dishType]);

  return (
    <div className="top-content-setting">
      <div className="top-title-wrapper">
        <h1>Product Management</h1>
        <button className="btn-setting">
          <span className="setting-icon">
            <GoSettings />
          </span>
          <span className="text-manage"> Manage Categories</span>
        </button>
      </div>
      <div className="top-wrapper mt-4">
        <Link className="nav-food" id="hot" onClick={() => setDishType("hot")}>
          Hot Dishes
        </Link>
        <Link
          className="nav-food"
          id="cold"
          onClick={() => setDishType("cold")}
        >
          Cold Dishes
        </Link>
        <Link className="nav-food" onClick={() => setDishType("shop")}>
          Shop
        </Link>
        <Link className="nav-food" onClick={() => setDishType("grill")}>
          Grill
        </Link>
        <Link className="nav-food" onClick={() => setDishType("appetizer")}>
          Appetizer
        </Link>
        <Link className="nav-food" onClick={() => setDishType("dessert")}>
          Dessert
        </Link>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default TopSetting;
