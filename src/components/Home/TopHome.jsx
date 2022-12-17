import React, { useEffect, useState } from "react";
import "./TopHome.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import FoodsHome from "./FoodsHome";
import _ from "lodash";
import moment from "moment/moment";

const TopHome = () => {
  const [dishType, setDishType] = useState("hot");
  let currentDate = moment().format("dddd, D MMM, YYYY");

  useEffect(() => {
    let navLink = document.querySelectorAll(".nav-food");
    _.each(navLink, (element) => {
      if (dishType === element.id) {
        element.classList.add("nav-food-active");
      } else {
        element.classList.remove("nav-food-active");
      }
    });
  }, [dishType]);

  return (
    <div className="center-content">
      <div className="top-content-area">
        <div className="top-wrapper">
          <div className="top-text-wrapper">
            <h1>Made Resto</h1>
            <span>{currentDate}</span>
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
          <Link
            className="nav-food"
            onClick={() => setDishType("shop")}
            id="shop"
          >
            Shop
          </Link>
          <Link
            className="nav-food"
            onClick={() => setDishType("grill")}
            id="grill"
          >
            Grill
          </Link>
          <Link
            className="nav-food"
            onClick={() => setDishType("appetizer")}
            id="appetizer"
          >
            Appetizer
          </Link>
          <Link
            className="nav-food"
            onClick={() => setDishType("dessert")}
            id="dessert"
          >
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
