import React, { useEffect, useRef } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import "./EditDish.css";
import { modalOpen } from "../../redux/actions/userActivities";
import { useDispatch } from "react-redux";
import foods from "../../foods.json";
import _ from "lodash";
import { useSelector } from "react-redux";

const EditDish = () => {
  const dispatch = useDispatch();
  const { myDishType } = useSelector((store) => store.userActivities);
  const boxMenu = useRef(null);

  let menu = document.querySelector("#menu-wrapper");
  console.log(menu);

  useEffect(() => {
    boxMenu.current.classList.add("d-none");
    setTimeout(() => {
      boxMenu.current.classList.remove("d-none");
    }, 1);
  }, [myDishType]);

  const handleAddNew = (e) => {
    e.preventDefault();
    dispatch(modalOpen(true));
  };

  const typeFoods = _.filter(foods, { type: myDishType });

  return (
    <>
      <div className="row text-center box-product-area" ref={boxMenu}>
        <div className="col-md-3 mb-3" onClick={handleAddNew}>
          <div
            className={`add-wrapper ${typeFoods.length === 0 ? "d-none" : ""}`}
          >
            <span className="add-icon">
              <IoAddSharp />
            </span>
            <h1>Add new dish</h1>
          </div>
        </div>
        {typeFoods.length !== 0 ? (
          typeFoods.map((data, index) => (
            <div className="col-md-3 mb-3" key={index}>
              <div className="food-wrapper">
                <img
                  src={`/images/content/${data.image}`}
                  alt={`${data.image}`}
                />
                <h1>{data.food_name}</h1>
                <div className="stock-product">
                  <span>{data.price}</span>
                  <i className="dot-icon">
                    <BsDot />
                  </i>
                  <span>{data.stock} Bowls</span>
                </div>
                <div className="edit-box">
                  <span>
                    <AiOutlineEdit />
                  </span>
                  <span>Edit Dish</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="not-available-content text-center">
            <span>Content Is Not Available Yet</span>
          </div>
        )}
      </div>
      <div className="divider-setting-bottom"></div>
    </>
  );
};

export default EditDish;
