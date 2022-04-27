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
import browcar1 from "../img/car-brow/car1/car1.png"
import browcar2 from "../img/car-brow/car1/car2.png"

const slideOpts = {
  autoplay: {
    disableOnInteraction: false,
    delay: 5000,
  },
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
    "View All Cars",
  ]);

  const [listEndow, setListEndow] = useState([
    "175-Point Inspection",
    "Fixed Price, No Hidden Fees",
    "1-Year Warranty",
    "5-Day Money-back Guarantee",
  ]);

  const [historyListCar,setHistoryLítCar] = useState([
    {
      id:1,
      imgcar:[
        browcar1,
        browcar2
      ],
      namecar:'2016 Honda',
      vercar:'HR-V E 1.8',
      favorites:true,
      detail:{
        distance:'100 km',
        type:'Automatic',
        address:'Ha Noi'
      },
      tagcar:[
        'ABS Brake',
        'Keyless Push Start',
        'SRS Airbag'
      ],
      priceTotal:'72,200',
      priceMonth:'791/mo'
    },
    {
      id:2,
      imgcar:[
        browcar1,
        browcar2
      ],
      namecar:'2019 Proton',
      vercar:'X70 TGDI EXECUTIVE 1.8',
      favorites:false,
      detail:{
        distance:'200 km',
        type:'Automatic',
        address:'Bang Kok'
      },
      tagcar:[
        'Electric Powered Seats',
        'Keyless Push Start',
        'Touchscreen Audio Display'
      ],
      priceTotal:'90,100',
      priceMonth:'987/mo'
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
          <IonGrid>
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
              <IonSlide className={style.ion_slide_buttom}>
                {item !== "View All Cars" ? (
                  <IonButton className={style.w_buttom} color="light" key={index}>
                    <span className={style.font_size_buttom}>{item}</span>
                  </IonButton>
                ) : (
                  <IonButton className={style.w_buttom} color="light" key={index}>
                    <span className={`${style.font_size_buttom} ${style.bt_color}`}>
                      {item}
                    </span>
                  </IonButton>
                )}
              </IonSlide>
            ))}
          </IonSlides>
        </>
        <>
          <div className={style.history_viewer}>
            <div className={style.history_viewer_title}>
              <h3>Browsing History</h3>
            </div>
          </div>
          <IonSlides>
              <IonSlide>
                {historyListCar.map((item) => (
                  <HistoryBrowCar key={item.id} historyListCar={item}></HistoryBrowCar>
                ))}
              </IonSlide>
            </IonSlides>
        </>
        <div className={style.car_popular_home}>
          <div
            style={{
              display: "flex",
              marginTop: "2rem",
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
          <div className={style.car_popular_home_text}>
            <span >
              We deliver the highest quality pre-owned cars that are refurbished to be as good as new through our comprehensive Carsome Certified Refurbishment Process.
            </span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
