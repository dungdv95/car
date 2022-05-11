import React, { useState } from "react";
import style from "./SearchCarPopOver.module.css";

function PopoverContent(props) {
    const listItem = props.listItem
    const [isOpen,setIsOpen] = useState(false);
    console.log(listItem)

  const onClickHideShow = () => {
    let revOpen = !isOpen;
    setIsOpen(revOpen);
  }
  return (
    <div className={style.popover_content_tree_item}>
      <div
        className={style.popover_content_tree_item_header}
        onClick={onClickHideShow}
      >
        <div className={style.popover_content_tree_item_header_title}>
          <span>{listItem.nameCar}</span>
          <span className={style.popover_content_tree_item_header_selected}>
            ({listItem.totalNumber})
          </span>
        </div>
        <div className={style.popover_content_tree_item_header_arrow}>
          <i
            className={
              isOpen
                ? style.popover_content_tree_item_header_arrow_icon_down
                : style.popover_content_tree_item_header_arrow_icon_up
            }
          ></i>
        </div>
      </div>
      <div className={isOpen ? style.popover_content_tree_item_content_show : style.popover_content_tree_item_content_hide}>
        <button
          type="button"
          className={style.popover_content_tree_item_content_button}
        >
          <span className={style.tree_item_button_content}>All Models</span>
        </button>
        {listItem.listModel.map((model) => (
          <button
            key={model.id}
            type="button"
            className={style.popover_content_tree_item_content_button}
          >
            <span className={style.tree_item_button_content}>
              {model.nameModel}
              <span className={style.tree_item_button_number}>
                ({model.cntNumber})
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default PopoverContent;
