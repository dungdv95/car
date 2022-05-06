import React, { useState } from "react";
import style from "./SearchCarPopOver.module.css";
import PopoverContent from "./PopoverContent.js";

function SearchCarPopOver(props) {
  const searchListCar = props.searchCarList;

//   console.log(searchListCar);
  return (
    <div className={style.popover_content}>
      <div className={style.popover_content_wraper}>
        <div className={style.popover_content_wraper_model}>
          <div className={style.popover_content_tree_model}>
            {searchListCar.map((item) => (
              <PopoverContent key={item.id} listItem={item}></PopoverContent>
            ))}
          </div>
        </div>
      </div>
      <div className={style.popover_content_bottom}>
        <button className={style.popover_content_bottom_btn}>Apply (41 Cars)</button>
      </div>
    </div>
  );
}
export default SearchCarPopOver;
