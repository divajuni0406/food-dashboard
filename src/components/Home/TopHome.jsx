import React, { useEffect, useState } from "react";
import "./TopHome.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import FoodsHome from "./FoodsHome";

const TopHome = () => {
  const [dishType, setDishType] = useState("hot");

  useEffect(() => {
    let hot = document.querySelector("#hot");
    let cold = document.querySelector("#cold");

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
    <div className="center-content">
      <div className="top-content-area">
        <div className="top-wrapper">
          <div className="top-text-wrapper">
            <h1>Made Resto</h1>
            <span>Tuesday, 2 Feb 2021</span>
          </div>
          <div className="search-area">
            <form action="">
              <button className="search-icon">
                <BiSearch />
              </button>
              <input
                type="search"
                className="search"
                placeholder="Search for food, coffe, etc.."
              />
            </form>
          </div>
        </div>
        <div className="top-wrapper mt-4">
          <Link
            className="nav-food"
            id="hot"
            onClick={() => setDishType("hot")}
          >
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
        <FoodsHome dishType={dishType} />
      </div>
    </div>
  );
};

export default TopHome;
