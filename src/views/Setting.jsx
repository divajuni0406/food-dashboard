import React, { useState, useEffect } from "react";
import "../css/Setting.css";
import { GoSettings } from "react-icons/go";
import { AiOutlineEdit } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import AddDishModal from "./AddDishModal";
import { modalOpen } from "../redux/actions/userActivities";
import { useDispatch } from "react-redux";

const Setting = () => {
  const [dishType, setDishType] = useState("hot");

  const dispatch = useDispatch();

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

  const handleAddNew = (e) => {
    e.preventDefault();
    dispatch(modalOpen(true));
  };

  return (
    <div className="bg-setting">
      <AddDishModal />
      <div className="container-fluid">
        <h1 className="title-setting">Settings</h1>
        <div className="setting-wrapper">
          <div className="content-setting">
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
                <Link
                  className="nav-food"
                  onClick={() => setDishType("appetizer")}
                >
                  Appetizer
                </Link>
                <Link
                  className="nav-food"
                  onClick={() => setDishType("dessert")}
                >
                  Dessert
                </Link>
              </div>
              <div className="divider"></div>
            </div>
            <div className="row text-center box-product-area">
              <div className="col-md-3 mb-3" onClick={handleAddNew}>
                <div className="add-wrapper">
                  <span className="add-icon">
                    <IoAddSharp />
                  </span>
                  <h1>Add new dish</h1>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="food-wrapper">
                  <img src="/images/content/cold_1.jpg" alt="" />
                  <h1>Spicy seasoned seafood noodles</h1>
                  <div className="stock-product">
                    <span>Rp.43.000 </span>
                    <span>20 Bowls</span>
                  </div>
                  <div className="edit-box">
                    <span>
                      <AiOutlineEdit />
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-setting-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
