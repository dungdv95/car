import React, { useState } from "react";
import style from "./SearchTypePopover.module.css";

function PopoverContent(props) {
    const type = props.type;
  return (
    <div className={style.popover_type_item}>
      <div className={style.popover_type_item_car}>
        <div className={style.popover_type_item_car_div1}></div>
        <div className={style.popover_type_item_car_div2} style={{backgroundImage:`url(${type.carImg})`}}></div>
        <div className={style.popover_type_item_car_div3}></div>
      </div>
      <span className={style.popover_type_car_label}>
        {type.nameCar}
        <span className={style.popover_type_car_number}>
          ({type.numberCar})
        </span>
      </span>
    </div>
  );
}
export default PopoverContent;
