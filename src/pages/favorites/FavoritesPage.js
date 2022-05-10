import {
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonSearchbar,
  IonToolbar,
  IonSelect,
  IonSelectOption,
  IonPopover,
  IonModal,
  IonButton,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import { useRef, useState, useMemo } from "react";
import style from "./FavoritesPage.module.css";
import location from "../../img/location.svg";
import down from "../../img/down.svg";
import raya from "../../img/raya.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Keyboard, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./FavoritesPage.css";
import PaginationTable from "../../components/pagination/PaginationTable.js";

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
import ListTableShopCar from "../../components/listtableshopcar/ListTableShopCar.js";

import { validateEmail } from "../../utils/validation.js";
import Footer from "../../components/footer/Footer.js";
import SearchCarPopOver from "../../components/searchpopover/SearchCarPopOver.js";
import SearchTypePopover from "../../components/searchpopover/SearchTypePopover.js";
import SearchBudgetPopover from "../../components/searchpopover/SearchBudgetPopover";

import sedan from "../../img/shop-car/car-type/sedan.svg";
import convertible from "../../img/shop-car/car-type/convertible.svg";
import coupe from "../../img/shop-car/car-type/coupe.svg";
import hatchback from "../../img/shop-car/car-type/hatchback.svg";
import mpv from "../../img/shop-car/car-type/mpv.svg";
import suv from "../../img/shop-car/car-type/suv.svg";
import truck from "../../img/shop-car/car-type/truck.svg";
import van from "../../img/shop-car/car-type/van.svg";
import wagon from "../../img/shop-car/car-type/wagon.svg";
import cancel from "../../img/cancel.svg";

import Johor from "../../img/shop-car/location/Johor.png";
import Kualalumpur from "../../img/shop-car/location/Kualalumpur.png";
import Melaka from "../../img/shop-car/location/Melaka.png";
import Negerisembilan from "../../img/shop-car/location/Negerisembilan.png";
import Pahang from "../../img/shop-car/location/Pahang.png";
import Perak from "../../img/shop-car/location/Perak.png";
import Pulaupinang from "../../img/shop-car/location/Pulaupinang.png";
import Selangor from "../../img/shop-car/location/Selangor.png";
import ModalFilter from "../../components/modal/ModalFilter.js"

let PageSize = 10;

const FavoritesPage = () => {
  const listRef = useRef();

  const [notifyValue, setNotifyValue] = useState("");

  const [isDisabled, setIsdisabled] = useState(true);

  const [listCar, setListCar] = useState([
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
  ]);

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

  const [listSearched, setListSearched] = useState(["Honda", "BMW", "SUV"]);

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

  const changeNotify = (e) => {
    // console.log(e.target.value)
    let check = validateEmail(e.target.value);
    // console.log(check)
    if (check !== null) {
      console.log(check);
      setIsdisabled(false);
    } else {
      console.log(check);
      setIsdisabled(true);
    }
    setNotifyValue(e.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  const [showModal, setShowModal] = useState(false);

  const [showModalFilter, setShowModalFilter] = useState(false);

  const setClosedModal = () => {
    setShowModalFilter(false)
  }

  const [listLocation, setListLocation] = useState([
    { id: 1, imgLocation: Johor, nameLocation: "Johor" },
    { id: 2, imgLocation: Kualalumpur, nameLocation: "Kuala Lumpur" },
    { id: 3, imgLocation: Melaka, nameLocation: "Melaka" },
    { id: 4, imgLocation: Negerisembilan, nameLocation: "Negeri Sembilan" },
    { id: 5, imgLocation: Pahang, nameLocation: "Pahang" },
    { id: 6, imgLocation: Perak, nameLocation: "Perak" },
    { id: 7, imgLocation: Pulaupinang, nameLocation: "Pulau Pinang" },
    { id: 8, imgLocation: Selangor, nameLocation: "Selangor" },
  ]);

  const handleScroll = (e) => {
    console.log(e)
  }

  return (
    <IonPage className="shopcar_custom_global">
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>Favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={style.back_ground_content}  scrollEvents={true} onIonScroll={(e) => {handleScroll(e)}}>
        <div className={style.header_bar}>
          {/* <div className={style.header_bar_breadcrum}>
            <div className={style.header_bar_breadcrum_filter}>
              <h1>Buy Car</h1>
            </div>
          </div> */}
          <div onClick={() => setShowModal(true)}>
            <div className={style.header_bar_city}>
              <img src={location} alt="" />
              <span className={style.header_bar_city_name}>All States</span>
              <img src={down} alt="" />
            </div>
          </div>
          <IonModal isOpen={showModal}>
            {/* <IonContent> */}
              <div className={style.location_content}>
                <div className={style.location_content_box}>
                  <div className={style.location_content_box_header}>
                    <span style={{ width: "24px" }}></span>
                    <span>Select Your Location</span>
                    <img
                      onClick={() => setShowModal(false)}
                      src={cancel}
                      style={{ cursor: "poiter" }}
                    ></img>
                  </div>
                  <p className={style.location_content_box_tip}>
                    Choose one or more locations to view cars near you.
                  </p>
                  <div className={style.location_content_box_content}>
                    {listLocation.map((item) => (
                      <div
                        key={item.id}
                        className={style.location_content_item}
                      >
                        <img
                          src={item.imgLocation}
                          className={style.location_content_image}
                        ></img>
                        <span>{item.nameLocation}</span>
                      </div>
                    ))}
                    <div className={style.location_content_item}>
                      <span>All States</span>
                    </div>
                  </div>
                  <div className={style.location_content_box_bottom}>
                    <button type="button" className={style.location_bottom_btn}>
                      <span>View 101 Cars</span>
                    </button>
                  </div>
                </div>
              </div>
            {/* </IonContent> */}
          </IonModal>
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
              <button
                id="btn_band_model"
                className={style.header_search_filter_btn}
              >
                Brand &amp; Model
              </button>
              <IonPopover
                trigger="btn_band_model"
                className={style.popover_custom}
              >
                {/* <IonContent> */}
                  <SearchCarPopOver
                    searchCarList={searchCar}
                  ></SearchCarPopOver>
                {/* </IonContent> */}
              </IonPopover>
            </div>
            <div className={style.header_search_body_type}>
              <button id="btn_type" className={style.header_search_filter_btn}>
                Body Type
              </button>
              <IonPopover trigger="btn_type" className={style.popover_custom}>
                {/* <IonContent> */}
                  <SearchTypePopover
                    searchTypeCar={searchTypeCar}
                  ></SearchTypePopover>
                {/* </IonContent> */}
              </IonPopover>
            </div>
            <div className={style.header_search_budget}>
              <button
                id="btn_budget"
                className={style.header_search_filter_btn}
              >
                Budget
              </button>
              <IonPopover trigger="btn_budget" className={style.popover_custom}>
                {/* <IonContent> */}
                  <SearchBudgetPopover
                    searchTypeCar={searchTypeCar}
                  ></SearchBudgetPopover>
                {/* </IonContent> */}
              </IonPopover>
            </div>
            <div
              className={style.header_search_filter}
              onClick={() => setShowModalFilter(true)}
            >
              <button className={style.header_search_filter_btn}>
                Filters
              </button>
            </div>
            <IonModal isOpen={showModalFilter}>
              {/* <IonContent> */}
                <ModalFilter closedModal={setClosedModal}></ModalFilter>
              {/* </IonContent> */}
            </IonModal>
          </div>

          <div className={style.tag_list_filter}>
            <Swiper slidesPerView={"auto"}>
              <SwiperSlide style={{ width: "unset" }}>
                <button className={style.tag_list_btn_reset}>
                  <i className={style.tag_list_btn_reset_i}></i>Reset
                </button>
              </SwiperSlide>
              <SwiperSlide style={{ width: "unset" }}>
                <button className={style.tag_list_btn_active_raya}>
                  <img src={raya} alt="" />
                </button>
              </SwiperSlide>
              <SwiperSlide style={{ width: "unset" }}>
                <button className={style.tag_list_btn_most_view}>
                  <span className={style.tag_list_btn_most_view_span}>
                    <i className={style.tag_list_btn_most_view_i}></i>
                    <span>Most Viewed</span>
                  </span>
                </button>
              </SwiperSlide>
              {listSearched.map((item, index) => (
                <SwiperSlide key={index} style={{ width: "unset" }}>
                  <button className={style.tag_list_btn_tags}>
                    <span className={style.tag_list_btn_span}>{item}</span>
                    <span className={style.tag_list_btn_btn}></span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className={style.body_card_list}>
          {/* <div className={style.body_card_list_banner}>
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
          </div> */}
          <div className={style.body_card_main}>
            <div className={style.body_card_main_header}>
              <div className={style.body_card_main_wraper}>
                <div className={style.body_card_main_header_total}>
                  1662 result(s)
                </div>
                <div className={style.body_card_main_header_sort}>
                  <IonItem className={style.custom_select_filter}>
                    <IonSelect
                      value="rec"
                      interface="popover"
                      className={style.custom_select_filter_select}
                    >
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="rec"
                      >
                        Recommended
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="lowestprice"
                      >
                        Lowest Price
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="highestprice"
                      >
                        Highest Price
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="lowestmileage"
                      >
                        Lowest Mileage
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="highestmileage"
                      >
                        Highest Mileage
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="newtoold"
                      >
                        New to Old
                      </IonSelectOption>
                      <IonSelectOption
                        className="custom_select_filter_select_option"
                        value="oldtonew"
                      >
                        Old to New
                      </IonSelectOption>
                    </IonSelect>
                  </IonItem>
                </div>
              </div>
            </div>
            <div className={style.body_card_main_content}>
              <div className={style.body_card_main_wrapper}>
                {listCar.map((item) => (
                  <div key={item.id} className={style.body_card_list_item}>
                    <ListTableShopCar historyListCar={item}></ListTableShopCar>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className={style.body_card_main_botton}></div> */}
            <div className={`${style.list_card_bottom} pagination_bottom`}>
              <PaginationTable
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={100}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
          
          {/* <div className={style.notify_body}>
            <div className={style.notify_body_content}>
              <div className={style.notify_body_content_panel}>
                <div className={style.notify_body_content_img}></div>
                <div className={style.notify_body_content_wraper}>
                  <div className={style.notify_body_title}>
                    <p>Can't find what you're looking for?</p>
                  </div>
                  <div className={style.notify_body_sub_title}>
                    <p>Get notified when we have new cars in store.</p>
                  </div>
                  <div className={style.notify_body_email}>
                    <form className={style.notify_body_email_form}>
                      <div className={style.notify_body_email_input}>
                        <div className={style.notify_body_email_input_box}>
                          <input
                            maxLength="60"
                            type="text"
                            value={notifyValue}
                            onChange={(e) => {
                              changeNotify(e);
                            }}
                            className={style.notify_body_input_email}
                          />
                          <label
                            style={
                              notifyValue.length > 0
                                ? { transform: "translateY(-60%) scale(.75)" }
                                : {}
                            }
                            className={style.notify_body_email_label}
                          >
                            Email
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className={style.notify_body_bot}>
                    {isDisabled ? (
                      <button
                        disabled="disabled"
                        type="button"
                        className={style.notify_body_button}
                      >
                        <span className={style.notify_body_button_content}>
                          <i
                            className={style.notify_body_button_content_icon}
                          ></i>
                          Notify Me
                        </span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className={style.notify_body_button}
                        style={{ backgroundColor: "#fdcf33", color: "#173559" }}
                      >
                        <span className={style.notify_body_button_content}>
                          <i
                            className={style.notify_body_button_content_icon}
                          ></i>
                          Notify Me
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
