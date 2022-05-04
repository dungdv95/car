import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  IonImg,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { useRef, useState } from "react";
import style from "./ShopCar.module.css";
import location from "../../img/location.svg";
import down from "../../img/down.svg";
import raya from "../../img/raya.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ShopCar.css"

import honda1 from "../../img/car-brow/car1/car1.png";
import honda2 from "../../img/car-brow/car1/car2.png";
import honda3 from "../../img/car-brow/car1/car3.png";
import honda4 from "../../img/car-brow/car1/car4.png";
import honda5 from "../../img/car-brow/car1/car5.png";
import honda6 from "../../img/car-brow/car1/car6.png";

import mecz1 from "../../img/car-brow/car2/car1.png";
import mecz2 from "../../img/car-brow/car2/car2.png";
import mecz3 from "../../img/car-brow/car2/car3.png";

import proton1 from "../../img/car-brow/car3/car1.png";
import proton2 from "../../img/car-brow/car3/car2.png";
import proton3 from "../../img/car-brow/car3/car3.png";

const ShopCar = () => {
  const listRef = useRef();

  const [listCar,setListCar] = useState([
    {
      id: 1,
      imgcar: [honda1, honda2, honda3, honda4, honda5, honda6],
      vercar: "2016 Honda",
      namecar: "HR-V E 1.8",
      favorites: true,
      detail: {
        distance: "103,073 km",
        type: "Automatic",
        address: "Ha Noi",
      },
      tagcar: ["ABS Brake", "Keyless Push Start", "SRS Airbag"],
      priceTotal: "72,200",
      priceMonth: "791/mo",
    },
    {
      id: 2,
      imgcar: [proton1, proton2, proton3],
      vercar: "2019 Proton",
      namecar: "X70 TGDI EXECUTIVE 1.8",
      favorites: false,
      detail: {
        distance: "36,432 km",
        type: "Automatic",
        address: "Bang Kok",
      },
      tagcar: [
        "Electric Powered Seats",
        "Keyless Push Start",
        "Touchscreen Audio Display",
      ],
      priceTotal: "90,100",
      priceMonth: "987/mo",
    },
    {
      id: 3,
      imgcar: [mecz1, mecz2, mecz3],
      vercar: "2019 Mercedes-Benz",
      namecar: "GLC 250 4MATIC (CKD) 2.0",
      favorites: false,
      detail: {
        distance: "30,896 km",
        type: "Automatic",
        address: "Kuala Lumpur",
      },
      tagcar: [
        "Leather Seat",
        "Touchscreen Audio Display",
        "Keyless Push Start",
      ],
      priceTotal: "260,700",
      priceMonth: "2857/mo",
    },
  ])

  const [valueSearch, setValueSearch] = useState("");

  const [listSearch, setListSearch] = useState([
    { id: 1, hidden: false, text: "Honda" },
    { id: 2, hidden: false, text: "Honda CITY" },
    { id: 3, hidden: false, text: "Honda ACCORD" },
    { id: 4, hidden: false, text: "Honda BR-V" },
    { id: 5, hidden: false, text: "Honda CIVIC" },
    { id: 6, hidden: false, text: "Honda CR-A" },
    { id: 7, hidden: false, text: "Honda CR-B" },
    { id: 8, hidden: false, text: "Honda CR-C" },
    { id: 9, hidden: false, text: "Honda CR-D" },
    { id: 10, hidden: false, text: "Honda CR-E" },
    { id: 11, hidden: false, text: "Honda CR-F" },
    { id: 12, hidden: false, text: "Honda CR-G" },
    { id: 13, hidden: false, text: "Honda CR-H" },
  ]);

  const onFocus = () => {
    listRef.current.style.display = "block";
  };

  const onChangeSearch = (e) => {
    const nameSearch = e.target.value.toLowerCase();
    setValueSearch(e.target.value);
    // console.log(nameSearch);
    const newList = [];
    listSearch.forEach((items) => {
      if (items.text.toLowerCase().includes(nameSearch)) {
        items.hidden = false;
      } else {
        items.hidden = true;
      }
      newList.push(items);
    });
    setListSearch(newList);
  };

  const onClickSearch = (searchText) => {
    console.log(searchText);
    setValueSearch(searchText);
    listRef.current.style.display = "none";
  };

  return (
    <IonPage className="shopcar_custom_global">
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
        <div className={style.header_search}>
          <IonToolbar className={style.toolbar_custom}>
            <IonSearchbar
              className={style.search_custom}
              onIonFocus={onFocus}
              onIonChange={(e) => onChangeSearch(e)}
              value={valueSearch}
            ></IonSearchbar>
          </IonToolbar>
          <div
            ref={listRef}
            style={{ display: "none" }}
            className={style.list_custom}
            onClick={() => {
              listRef.current.style.display = "none";
            }}
          >
            <div className={style.list_custom_item}>
              <IonList>
                {listSearch.map((item) => (
                  <IonItem
                    className={style.btn_custom_search}
                    onClick={() => {
                      onClickSearch(item.text);
                    }}
                    hidden={item.hidden}
                    key={item.id}
                  >
                    {item.text}
                  </IonItem>
                ))}
              </IonList>
            </div>
          </div>

          <div className={style.header_search_list_button}>
            <div className={style.header_search_Model}>
              <button className={style.header_search_filter_btn}>
                Brand &amp; Model
              </button>
            </div>
            <div className={style.header_search_body_type}>
              <button className={style.header_search_filter_btn}>
                Body Type
              </button>
            </div>
            <div className={style.header_search_budget}>
              <button className={style.header_search_filter_btn}>Budget</button>
            </div>
            <div className={style.header_search_filter}>
              <button className={style.header_search_filter_btn}>
                Filters
              </button>
            </div>
          </div>

          <div className={style.tag_list_filter}>
            <button className={style.tag_list_btn_reset}>
              <i className={style.tag_list_btn_reset_i}></i>Reset
            </button>
            <button className={style.tag_list_btn_active_raya}>
              <img src={raya} />
            </button>
            <button className={style.tag_list_btn_most_view}>
              <span className={style.tag_list_btn_most_view_span}>
                <i className={style.tag_list_btn_most_view_i}></i>
                <span>Most Viewed</span>
              </span>
            </button>
            <button className={style.tag_list_btn_tags}>
              <span className={style.tag_list_btn_span}>SUV</span>
              <span className={style.tag_list_btn_btn}></span>
            </button>
            <button className={style.tag_list_btn_tags}>
              <span className={style.tag_list_btn_span}>Honda</span>
              <span className={style.tag_list_btn_btn}></span>
            </button>
          </div>
        </div>
        <div className={style.body_card_list}>
          <div className={style.body_card_list_banner}>
            <Swiper slidesPerView={"auto"}>
              <SwiperSlide
                className={style.w_70}
                style={{ marginLeft: "16px" }}
              >
                <a
                  href="https://www.carsome.my/buy-car?campaignId=35"
                  className={style.body_card_list_banner_link}
                ></a>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner1_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <a
                  href="https://www.carsome.my/news/item/monthly-car-promo"
                  className={style.body_card_list_banner_link}
                ></a>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner2_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <a
                  href="https://www.carsome.my/buy-car?bodyType=3,4"
                  className={style.body_card_list_banner_link}
                ></a>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner3_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <div className={style.body_card_list_banner_link}></div>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner4_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <a
                  href="https://www.carsome.my/news/item/fresh-graduate-car-loan"
                  className={style.body_card_list_banner_link}
                ></a>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner5_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <div className={style.body_card_list_banner_link}></div>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner6_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={style.w_70}>
                <div
                  href="https://www.carsome.my/buy-car?campaignId=35"
                  className={style.body_card_list_banner_link}
                ></div>
                <div className={style.body_card_list_banner_theme}>
                  <div className={style.body_card_list_banner_theme_div1}></div>
                  <div
                    className={style.body_card_list_banner7_theme_div2}
                  ></div>
                  <div className={style.body_card_list_banner_theme_div3}></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={style.body_card_main}>
            <div className={style.body_card_main_header}>
              <div className={style.body_card_main_wraper}>
                <div className={style.body_card_main_header_total}>
                  1662 result(s)
                </div>
                <div className={style.body_card_main_header_sort}>
                  <IonItem className={style.custom_select_filter}>
                    <IonSelect value="rec" interface="popover" className={style.custom_select_filter_select}>
                      <IonSelectOption className="custom_select_filter_select_option" value="rec">Recommended</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="lowestprice">Lowest Price</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="highestprice">Highest Price</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="lowestmileage">Lowest Mileage</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="highestmileage">Highest Mileage</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="newtoold">New to Old</IonSelectOption>
                      <IonSelectOption className="custom_select_filter_select_option" value="oldtonew">Old to New</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </div>
              </div>
            </div>
            <div className={style.body_card_main_content}>
              <div className={style.body_card_main_wrapper}>
                  {listCar.map((item) => (
                    <div key={item.id} className={style.body_card_list_item}>
                      a
                    </div>
                  ))}
              </div>
            </div>
            <div className={style.body_card_main_botton}></div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ShopCar;
