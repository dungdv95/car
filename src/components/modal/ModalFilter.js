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
  console.log(props);
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
                document.getElementById("model").scrollIntoView(true);
              }}
              type="button"
              className={style.location_content_btn}
            >
              Brand & Model
            </button>
            <button
              onClick={() => {
                document.getElementById("type").scrollIntoView(true);
              }}
              type="button"
              className={style.location_content_btn}
            >
              Body Type
            </button>
            <button
              onClick={() => {
                document.getElementById("bugdet").scrollIntoView(true);
              }}
              type="button"
              className={style.location_content_btn}
            >
              Budget
            </button>
            <button
              onClick={() => {
                document.getElementById("year").scrollIntoView(true);
              }}
              type="button"
              className={style.location_content_btn}
            >
              Year
            </button>
            <button type="button" className={style.location_content_btn}>
              Transmission
            </button>
            <button type="button" className={style.location_content_btn}>
              Mileage
            </button>
            <button type="button" className={style.location_content_btn}>
              Color
            </button>
            <button type="button" className={style.location_content_btn}>
              Carsome Certified
            </button>
            <button type="button" className={style.location_content_btn}>
              Store
            </button>
          </div>
          <div className={style.location_content_body}>
            <div id="model" className={style.location_content_body_model}>
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

            <div id="type" className={style.location_content_body_type}>
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

            <div id="bugdet" className={style.content_body_budget}>
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
                      step={3}
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

            <div id="year" className={style.content_body_year}>
                <div className={style.content_body_year_title}>Year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalFilter;
