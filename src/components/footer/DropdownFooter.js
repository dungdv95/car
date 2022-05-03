import React,{useState} from "react";
import style from "./DropdownFooter.module.css";

function DropdownFooter(props) {
  const listFunciont = props.listItem;
  const [isOpen,setIsOpen] = useState(listFunciont.initOpen)
  console.log(isOpen);
  const onChangeFunction = () => {
    let revOpen = !isOpen;
    setIsOpen(revOpen);
  }

  return (
    <>
      <dl className={style.function_total}>
        <dt className={style.function_total_name} onClick={onChangeFunction}>
          <span>{listFunciont.namefunc}</span>
          <i
            className={isOpen ? style.function_total_name_up : style.function_total_name_down}
          ></i>
        </dt>
        {listFunciont.arrFunc.map((item, index) => (
          <dd key={index} className={isOpen ? style.function_total_child : style.function_total_child_hidden}>
            <a href={item.link} target="_self">
              {item.text}
            </a>
          </dd>
        ))}
      </dl>
    </>
  );
}

export default DropdownFooter;
