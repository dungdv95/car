import React, { useState } from "react";
import style from "./ModalFilter.module.css";

function ModalModel(props) {
    // console.log(props);
  const listItem = props.modelList;
  const [isOpenModel, setOpenModel] = useState(false);

  const showHideModel = () => {
    let isReverse = !isOpenModel;
    setOpenModel(isReverse);
  };
  //   console.log(isOpenModel);

  return (
    <div className={style.make_model_tree_item}>
      <div
        className={style.make_model_tree_item_header}
        onClick={showHideModel}
      >
        <div className={style.make_model_tree_item_title}>
          <span>{listItem.nameCar}</span>
          <span style={{ color: "#959ca4" }}>({listItem.totalNumber})</span>
        </div>
        <div className={style.make_model_tree_item_arrows}>
          <i
            className={
              isOpenModel
                ? style.make_model_tree_item_arrows_down
                : style.make_model_tree_item_arrows_up
            }
          ></i>
        </div>
      </div>

      <div className={style.make_model_content} style={isOpenModel ? {display:'block'} : {display:'none'}}>
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
export default ModalModel;
