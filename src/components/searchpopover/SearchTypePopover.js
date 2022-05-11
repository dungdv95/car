import React, { useState } from "react";
import PopoverContent from "./PopoverContent";
import style from "./SearchTypePopover.module.css";
import PopoverTypeContent from "./PopoverTypeContent.js"

function SearchTypePopover(props) {
  const searchTypeCar = props.searchTypeCar;
//   console.log(searchTypeCar);
  return (
    <div className={style.popover_content}>
      <div className={style.popover_content_wraper}>
        <div className={style.popover_content_wraper_type}>
          <div className={style.popover_type}>
            {searchTypeCar.map((type) => (
              <PopoverTypeContent key={type.id} type={type}></PopoverTypeContent>
            ))}
          </div>
        </div>
      </div>
      <div className={style.popover_content_bottom}>
        <button className={style.popover_content_bottom_btn}>
          Apply (41 Cars)
        </button>
      </div>
    </div>
  );
}
export default SearchTypePopover;
