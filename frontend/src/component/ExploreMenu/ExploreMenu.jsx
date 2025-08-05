import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category, setcategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diversified menu featuring a delectable array of dishes.
        Our mission is to provide a delightful culinary experience with
        high-quality ingredients and exceptional service.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setcategory(prev=>prev===item.menu_name?"ALL": item.menu_name)}key={index} className="explore-menu-list-item">
              <img className  ={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
export default ExploreMenu;
