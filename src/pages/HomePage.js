import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonSlides,
  IonSlide,
  IonImg,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import ListCar from "../components/ListCar";
import SearchListCar from "../components/SearchListCar";
import style from "./HomePage.module.css";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import car3 from "../img/car3.png";
import car4 from "../img/car4.png";
import HistoryBrowCar from "../components/HistoryBrowCar";
import honda1 from "../img/car-brow/car1/car1.png";
import honda2 from "../img/car-brow/car1/car2.png";
import honda3 from "../img/car-brow/car1/car3.png";
import honda4 from "../img/car-brow/car1/car4.png";
import honda5 from "../img/car-brow/car1/car5.png";
import honda6 from "../img/car-brow/car1/car6.png";

import mecz1 from "../img/car-brow/car2/car1.png";
import mecz2 from "../img/car-brow/car2/car2.png";
import mecz3 from "../img/car-brow/car2/car3.png";

import proton1 from "../img/car-brow/car3/car1.png";
import proton2 from "../img/car-brow/car3/car2.png";
import proton3 from "../img/car-brow/car3/car3.png";

const slideOpts = {
  autoplay: {
    disableOnInteraction: false,
    delay: 5000,
  },
  loop: true,
  // pagination: {
  //   // type:'progressbar',
  //   dynamicBullets:true
  // }
};

const HomePage = () => {
  const [searchCar, setSearchCar] = useState("");

  const [listCar, setListCar] = useState([
    {
      id: 1,
      text: "From RM499*",
      carsrc: car1,
    },
    {
      id: 2,
      text: "From RM699*",
      carsrc: car2,
    },
    {
      id: 3,
      text: "From RM999*",
      carsrc: car3,
    },
    {
      id: 4,
      text: "From RM1,299*",
      carsrc: car4,
    },
  ]);

  const [searchListText, setSearchListText] = useState([
    "Under RM 30,000",
    "RM 30,000 - 50,000",
    "RM 50,000 - 80,000",
    "RM 80,000 - 100,000",
  ]);

  const [listEndow, setListEndow] = useState([
    "175-Point Inspection",
    "Fixed Price, No Hidden Fees",
    "1-Year Warranty",
    "5-Day Money-back Guarantee",
  ]);

  const [historyListCar, setHistoryListCar] = useState([
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

  const [listCarView, setListCarView] = useState([
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

  const onChangeSearch = (e) => {
    setSearchCar(e.detail.value);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <>
          <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <IonImg src={img3} />
            </IonSlide>
            <IonSlide>
              <IonImg src={img5} />
            </IonSlide>
            <IonSlide>
              <IonImg src={img2} />
            </IonSlide>
            <IonSlide>
              <IonImg src={img4} />
            </IonSlide>
          </IonSlides>
        </>
        <>
          <IonGrid className={style.search_bar}>
            <IonRow>
              <IonCol size="12">
                <IonSearchbar
                  className={style.searchinput}
                  value={searchCar}
                  onIonChange={(e) => onChangeSearch(e)}
                  placeholder="Search by Brand, Model, or Keywords"
                ></IonSearchbar>
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
        <>
          <IonGrid>
            <IonRow>
              {listCar.map((car) => (
                <ListCar key={car.id} carDetail={car}></ListCar>
              ))}
            </IonRow>
          </IonGrid>
        </>
        <SearchListCar></SearchListCar>
        <>
          <IonSlides options={{ slidesPerView: 2 }}>
            {searchListText.map((item, index) => (
              <IonSlide className={style.ion_slide_buttom} key={index}>
                <IonButton className={style.w_buttom} color="light">
                  <span className={style.font_size_buttom}>{item}</span>
                </IonButton>
              </IonSlide>
            ))}
            <IonSlide className={style.ion_slide_buttom}>
              <IonButton className={style.w_buttom} color="light">
                <span className={`${style.font_size_buttom} ${style.bt_color}`}>
                  View All Cars
                </span>
              </IonButton>
            </IonSlide>
          </IonSlides>
        </>
        <>
          <div className={style.history_viewer}>
            <div className={style.history_viewer_title}>
              <h3>Browsing History</h3>
            </div>
          </div>
          <IonSlides
            options={{ slidesPerView: 1 }}
            style={{ paddingBottom: "20px" }}
          >
            {historyListCar.map((item) => (
              <IonSlide className={style.wHistory} key={item.id}>
                <HistoryBrowCar historyListCar={item}></HistoryBrowCar>
              </IonSlide>
            ))}
            <IonSlide>
              <div className={style.view_more}>
                <div className={style.view_more_detail}>
                  <i></i>
                  View More Cars
                </div>
              </div>
            </IonSlide>
          </IonSlides>
        </>
        <div className={style.car_popular_home}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={style.title}>
              <h3 className={style.h3_title}>Shop Carsome Certified Cars</h3>
            </div>
          </div>
          <div className={style.car_popular_text_list}>
            <div className={style.car_popular_text_list_wrapper}>
              {listEndow.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <IonSlides
            options={{ slidesPerView: 1 }}
            style={{ paddingBottom: "20px" }}
          >
            {historyListCar.map((item) => (
              <IonSlide className={style.wHistory} key={item.id}>
                <HistoryBrowCar historyListCar={item}></HistoryBrowCar>
              </IonSlide>
            ))}
            <IonSlide>
              <div className={style.view_more_popular}>
                <div className={style.view_more_popular_detail}>
                  <i></i>
                  View More Popular Cars
                </div>
              </div>
            </IonSlide>
          </IonSlides>

          <div className={style.car_popular_home_text}>
            <span>
              We deliver the highest quality pre-owned cars that are refurbished
              to be as good as new through our comprehensive Carsome Certified
              Refurbishment Process.
            </span>
          </div>
        </div>
        <div className={style.how_it_work}>
          <div className={style.how_it_work_title}>
            <h3>How It Works</h3>
          </div>
          <div style={{display:'flex',justifyContent:'center'}}>
            <IonSegment className={style.how_buy_sell} value="how_buy"
              onIonChange={(e) => console.log("Segment selected", e.detail.value)}
            >
              <IonSegmentButton value="how_buy">
                <IonLabel>How to Buy</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="how_sell">
                <IonLabel>How to Sell</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
