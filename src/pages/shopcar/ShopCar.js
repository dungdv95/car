import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRef, useState } from "react";
import style from "./ShopCar.module.css";
import location from "../../img/location.svg";
import down from "../../img/down.svg";

const ShopCar = () => {
  const listRef = useRef();

  const [listSearch, setListSearch] = useState([
    { id: 1, hidden: false, text: "Honda" },
    { id: 2, hidden: false, text: "Honda CITY" },
    { id: 3, hidden: false, text: "Honda ACCORD" },
    { id: 4, hidden: false, text: "Honda BR-V" },
    { id: 5, hidden: false, text: "Honda CIVIC" },
    { id: 6, hidden: false, text: "Honda CR-V" },
  ]);

  const onLossFocus = () => {
    listRef.current.style.display = "none";
  };
  const onFocus = () => {
    listRef.current.style.display = "block";
  };

  const onChangeSearch = (e) => {
    const nameSearch = e.target.value.toLowerCase();
    console.log(nameSearch);
    const newList = [];
    listSearch.forEach(items => {
      if(items.text.toLowerCase().includes(nameSearch)) {
        items.hidden = false;
      }
      else {
        items.hidden = true;
      }
      newList.push(items);
    })
    setListSearch(newList)
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={style.header_bar}>
          <div className={style.header_bar_breadcrum}>
            <div className={style.header_bar_breadcrum_filter}>
              <h1>Buy Car</h1>
            </div>
          </div>
          <div>
            <div className={style.header_bar_city}>
              <img src={location} />
              <span className={style.header_bar_city_name}>All States</span>
              <img src={down} />
            </div>
          </div>
        </div>

        <IonToolbar className={style.toolbar_custom}>
          <IonSearchbar
            className={style.search_custom}
            showCancelButton="focus"
            onIonBlur={onLossFocus}
            onIonFocus={onFocus}
            onIonChange={(e) => onChangeSearch(e)}
          ></IonSearchbar>
        </IonToolbar>
        <div className={style.list_custom}>
          <IonList id="list" ref={listRef} style={{ display: "none" }}>
            {listSearch.map((item) => (
              <IonItem hidden={item.hidden} key={item.id}>{item.text}</IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShopCar;
