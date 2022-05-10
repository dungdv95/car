import React, { useState, useRef, useEffect } from "react";
import { IonModal, IonContent, IonRange } from "@ionic/react";
import style from "./ModalFilter.module.css";
import cancel from "../../img/cancel.svg";

import sedan from "../../img/shop-car/car-type/sedan.svg";
import convertible from "../../img/shop-car/car-type/convertible.svg";
import coupe from "../../img/shop-car/car-type/coupe.svg";
import hatchback from "../../img/shop-car/car-type/hatchback.svg";
import mpv from "../../img/shop-car/car-type/mpv.svg";
import suv from "../../img/shop-car/car-type/suv.svg";
import truck from "../../img/shop-car/car-type/truck.svg";
import van from "../../img/shop-car/car-type/van.svg";
import wagon from "../../img/shop-car/car-type/wagon.svg";

function ModalFilter(props) {
  // console.log(props);
  const closedModal = props.closedModal;

  const [searchCar, setSearchCar] = useState([
    {
      id: 1,
      nameCar: "BMV",
      totalNumber: 38,
      listModel: [
        { id: 1, nameModel: "1", cntNumber: 2 },
        { id: 2, nameModel: "2", cntNumber: 2 },
        { id: 3, nameModel: "3", cntNumber: 20 },
        { id: 4, nameModel: "5", cntNumber: 4 },
        { id: 5, nameModel: "X1", cntNumber: 7 },
        { id: 6, nameModel: "X3", cntNumber: 2 },
        { id: 7, nameModel: "X5", cntNumber: 1 },
      ],
    },
    {
      id: 2,
      nameCar: "Ford",
      totalNumber: 6,
      listModel: [
        { id: 1, nameModel: "ECOSPORT", cntNumber: 0 },
        { id: 2, nameModel: "FIESTA", cntNumber: 3 },
        { id: 3, nameModel: "FOCUS", cntNumber: 1 },
        { id: 4, nameModel: "RANGER", cntNumber: 2 },
      ],
    },
  ]);

  const [searchTypeCar, setSearchTypeCar] = useState([
    { id: 1, carImg: sedan, nameCar: "Sedan", numberCar: 26 },
    { id: 2, carImg: suv, nameCar: "SUV", numberCar: 10 },
    { id: 3, carImg: mpv, nameCar: "MPV", numberCar: 0 },
    { id: 4, carImg: hatchback, nameCar: "Hatchback", numberCar: 3 },
    { id: 5, carImg: coupe, nameCar: "Coupe", numberCar: 1 },
    { id: 6, carImg: truck, nameCar: "Truck", numberCar: 2 },
    { id: 7, carImg: wagon, nameCar: "Wagon", numberCar: 0 },
    { id: 8, carImg: convertible, nameCar: "Convertible", numberCar: 0 },
    { id: 9, carImg: van, nameCar: "Van", numberCar: 0 },
  ]);

  const [rangeValue, setRangeValue] = useState({ lower: 0, upper: 280000 });
  const rangeRef = useRef();

  useEffect(() => {
    // console.log(rangeRef.current)
    rangeRef.current.value = { lower: 0, upper: 280000 };
  }, []);

  const onChangeRange = (e) => {
    console.log(e.detail.value);
    setRangeValue(e.detail.value);
  };

  const [valueMileage, setValueMileage] = useState(180000);

  const onChangeRangeMileage = (e) => {
    // console.log(valueMileage)
    setValueMileage(e.detail.value);
  };

  const refModel = useRef();
  const refType = useRef();
  const refBudget = useRef();
  const refYear = useRef();
  const refTrans = useRef();
  const refMileage = useRef();
  const refColor = useRef();
  const refCerti = useRef();
  const refStore = useRef();

  const [activeBtn,setActiveBtn] = useState("model");

  console.log(activeBtn)

  return (
    <div className={style.location_content}>
      <div className={style.location_content_box}>
        <div className={style.location_content_box_header}>
          <span style={{ width: "24px" }}></span>
          <span>All Filters</span>
          <img
            onClick={() => {
              closedModal();
            }}
            src={cancel}
            style={{ cursor: "poiter" }}
          ></img>
        </div>

        <div className={style.location_content_middle}>
          <div className={style.location_content_nav}>
            <button
              onClick={() => {
                setActiveBtn("model")
                refModel.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "model" ? style.location_content_btn_active : style.location_content_btn}
            >
              Brand & Model
            </button>
            <button
              onClick={() => {
                setActiveBtn("type")
                refType.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "type" ? style.location_content_btn_active : style.location_content_btn}
            >
              Body Type
            </button>
            <button
              onClick={() => {
                setActiveBtn("budget")
                refBudget.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "budget" ? style.location_content_btn_active : style.location_content_btn}
            >
              Budget
            </button>
            <button
              onClick={() => {
                setActiveBtn("year")
                refYear.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "year" ? style.location_content_btn_active : style.location_content_btn}
            >
              Year
            </button>
            <button
              onClick={() => {
                setActiveBtn("trans")
                refTrans.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "trans" ? style.location_content_btn_active : style.location_content_btn}
            >
              Transmission
            </button>
            <button
              onClick={() => {
                setActiveBtn("mileage")
                refMileage.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "mileage" ? style.location_content_btn_active : style.location_content_btn}
            >
              Mileage
            </button>
            <button
              onClick={() => {
                setActiveBtn("color")
                refColor.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "color" ? style.location_content_btn_active : style.location_content_btn}
            >
              Color
            </button>
            <button
              onClick={() => {
                setActiveBtn("certified")
                refCerti.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "certified" ? style.location_content_btn_active : style.location_content_btn}
            >
              Carsome Certified
            </button>
            <button
              onClick={() => {
                setActiveBtn("store")
                refStore.current.scrollIntoView(true);
              }}
              type="button"
              className={activeBtn === "store" ? style.location_content_btn_active : style.location_content_btn}
            >
              Store
            </button>
          </div>
          <div className={style.location_content_body}>
            <div ref={refModel} className={style.location_content_body_model}>
              <div className={style.model_header}>Brand & Model</div>
              <div className={style.model_sub_content}>
                <div className={style.model_sub_make_model}>
                  <div className={style.make_model_tree}>
                    {searchCar.map((item) => (
                      <div key={item.id} className={style.make_model_tree_item}>
                        <div className={style.make_model_tree_item_header}>
                          <div className={style.make_model_tree_item_title}>
                            <span>{item.nameCar}</span>
                            <span style={{ color: "#959ca4" }}>
                              ({item.totalNumber})
                            </span>
                          </div>
                          <div className={style.make_model_tree_item_arrows}>
                            <i
                              className={style.make_model_tree_item_arrows_i}
                            ></i>
                          </div>
                        </div>

                        <div className={style.make_model_content}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div ref={refType} className={style.location_content_body_type}>
              <div className={style.model_header}>Body Type</div>
              <div className={style.type_sub_content}>
                <div className={style.type_body}>
                  <div className={style.type_body_content}>
                    {searchTypeCar.map((item) => (
                      <div
                        key={item.id}
                        className={style.type_body_content_item}
                      >
                        <div className={style.type_body_content_theme}>
                          <div
                            className={style.popover_type_item_car_div1}
                          ></div>
                          <div
                            className={style.popover_type_item_car_div2}
                            style={{ backgroundImage: `url(${item.carImg})` }}
                          ></div>
                          <div
                            className={style.popover_type_item_car_div3}
                          ></div>
                        </div>
                        <span className={style.type_body_content_label}>
                          {item.nameCar}
                          <span style={{ color: "#959ca4" }}>
                            ({item.numberCar})
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div ref={refBudget} className={style.content_body_budget}>
              <div className={style.content_body_budget_title}>Budget</div>
              <div className={style.budget_sub_content}>
                <div className={style.budget_header}>
                  <p>Full & Monthly Payment(RM)</p>
                </div>
                <div className={style.budget_range}>
                  <div className={style.budget_range_line}>
                    <p className={style.budget_range_line_rm}>
                      RM {rangeValue.lower}
                    </p>
                    <p className={style.budget_range_line_rm}>
                      RM {rangeValue.upper}
                    </p>
                  </div>
                  <div className={style.popover_budget_line}>
                    <IonRange
                      style={{ padding: "unset" }}
                      ref={rangeRef}
                      dualKnobs={true}
                      min={0}
                      max={280000}
                      onIonChange={(e) => {
                        onChangeRange(e);
                      }}
                    />
                  </div>
                  <div className={style.budget_range_line}>
                    <p className={style.budget_range_line_rm}>986/mo</p>
                    <p className={style.budget_range_line_rm}>3,068/mo</p>
                  </div>
                </div>
                <div className={style.budget_content}>
                  <button className={style.budget_content_button}>
                    <span>Under 30,000</span>
                  </button>
                  <button className={style.budget_content_button}>
                    <span>30,000-50,000</span>
                  </button>
                  <button className={style.budget_content_button}>
                    <span>50,000-80,000</span>
                  </button>
                  <button className={style.budget_content_button}>
                    <span>80,000-100,000</span>
                  </button>
                  <button className={style.budget_content_button}>
                    <span>Above 100,000</span>
                  </button>
                </div>
              </div>
            </div>

            <div ref={refYear} className={style.content_body_year}>
              <div className={style.content_body_year_title}>Year</div>
              <div className={style.body_year_sub_content}>
                <div className={style.body_year_sub_content_mode}>
                  <IonRange
                    className={style.year_range_setup}
                    min={2010}
                    max={2022}
                    pin
                  />
                </div>
              </div>
            </div>

            <div ref={refTrans} className={style.content_body_trans}>
              <div className={style.content_body_trans_title}>Transmission</div>
              <div className={style.body_trans_sub_content}>
                <div className={style.body_trans_sub_content_trans}>
                  <div className={style.sub_content_trans_wraper}>
                    <button
                      className={style.sub_content_trans_wraper_button}
                      style={{ marginRight: "8px" }}
                    >
                      Manual
                    </button>
                    <button className={style.sub_content_trans_wraper_button}>
                      Auto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refMileage} className={style.content_body_mileage}>
              <div className={style.content_body_mileage_title}>Mileage</div>
              <div className={style.body_mileage_sub_content}>
                <div className={style.body_mileage_sub_content_mode}>
                  <IonRange
                    className={style.year_range_setup}
                    value={valueMileage}
                    min={10000}
                    max={180000}
                    pin={true}
                    onIonChange={(e) => {
                      onChangeRangeMileage(e);
                    }}
                  />
                </div>
              </div>
            </div>

            <div ref={refColor} className={style.content_body_color}>
              <div className={style.content_body_color_title}>Color</div>
              <div className={style.body_color_sub_content}>
                <div className={style.body_color_sub_content_mode}>
                  <div className={style.body_color_sub_content_wrapper}>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "black",
                          color: "#ffffff",
                          borderColor: "black",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Black
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "white",
                          color: "#000000",
                          borderColor: "#ecf3f9",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        White
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "gray",
                          color: "#ffffff",
                          borderColor: "gray",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Gray
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "silver",
                          color: "#ffffff",
                          borderColor: "silver",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Silver
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "red",
                          color: "#ffffff",
                          borderColor: "red",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Red
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "blue",
                          color: "#ffffff",
                          borderColor: "blue",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Blue
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "brown",
                          color: "#ffffff",
                          borderColor: "brown",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Brown
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "gold",
                          color: "#ffffff",
                          borderColor: "gold",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Gold
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "green",
                          color: "#ffffff",
                          borderColor: "green",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Green
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "orange",
                          color: "#ffffff",
                          borderColor: "orange",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Orange
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "beige",
                          color: "#000000",
                          borderColor: "#ecf3f9",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Beige
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{
                          background: "purple",
                          color: "#ffffff",
                          borderColor: "purple",
                        }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Purple
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_i
                        }
                        style={{ background: "#805c10", color: "#ffffff" }}
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Bronze
                      </span>
                    </button>
                    <button
                      className={style.body_color_sub_content_wrapper_button}
                    >
                      <i
                        className={
                          style.body_color_sub_content_wrapper_button_other
                        }
                      ></i>
                      <span
                        className={
                          style.body_color_sub_content_wrapper_button_text
                        }
                      >
                        Other
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refCerti} className={style.content_body_certified}>
              <div className={style.content_body_certified_title}>
                Carsome Certified
              </div>
              <div className={style.body_certified_sub_content}>
                <div className={style.body_certified_sub_content_mode}>
                  <div className={style.body_certified_sub_wraper}>
                    <button className={style.body_certified_sub_wraper_button}>
                      Carsome Certified Cars Only
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div ref={refStore} className={style.content_body_store}>
              <div className={style.content_body_store_title}>Store</div>
              <div className={style.body_store_sub_content}>
                <div className={style.body_store_sub_content_mode}>
                  <div className={style.body_store_wraper}>
                    <button className={style.body_store_wraper_button}>
                      Carsome Kelana Jaya
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome PJ Automall
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Cheras
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Kepong
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Setiawangsa
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Johor Jaya
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Juru
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Setia SPICE
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Kuantan
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Seremban
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Melaka
                    </button>
                    <button className={style.body_store_wraper_button}>
                      Carsome Ipoh
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.modal_content_buttom}>
          <button className={style.modal_content_clear_button}>Reset</button>
          <button className={style.modal_content_apply_button}>Apply (2 Cars)</button>
        </div>
      </div>
    </div>
  );
}
export default ModalFilter;
