import { useState } from "react";
import {
  IonContent,
  IonPage,
  IonImg,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HowtoBuySell from "../../components/howtobuysell/HowtoBuySell.js";
import ListCar from "../../components/car-list/ListCar.js";
import SearchListCar from "../../components/search-list/SearchListCar.js";
import CommentUser from "../../components/comment/CommentUser.js"
import Footer from "../../components/footer/Footer"
import style from "./HomePage.module.css";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import car1 from "../../img/car1.png";
import car2 from "../../img/car2.png";
import car3 from "../../img/car3.png";
import car4 from "../../img/car4.png";
import HistoryBrowCar from "../../components/history/HistoryBrowCar.js";
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

import buy1 from "../../img/buy1.svg";
import buy2 from "../../img/buy2.svg";
import buy3 from "../../img/buy3.svg";
import buy4 from "../../img/buy4.svg";

import sell1 from "../../img/sell1.jpg";
import sell2 from "../../img/sell2.jpg";
import sell3 from "../../img/sell3.jpg";
import sell4 from "../../img/sell4.jpg";

const listBuy = [
  {
    id: 1,
    imgsrc: buy1,
    title: "Find Your Car",
    text: "Browse our carefully curated and professionally inspected cars online.",
    link: "/buy-car",
  },
  {
    id: 2,
    imgsrc: buy2,
    title: "Test Drive",
    text: "All our cars are sanitized before and after the test drive, making your experience safe and sound.",
    link: "",
  },
  {
    id: 3,
    imgsrc: buy3,
    title: "Doorstep Delivery",
    text: "Choose to collect your car from our centers or enjoy a doorstep delivery.",
    link: "",
  },
  {
    id: 4,
    imgsrc: buy4,
    title: "Worry-free Purchase",
    text: "Enjoy a 5-day money back guarantee when you buy Carsome Certified car.",
    link: "",
  },
];

const listSell = [
  {
    id: 1,
    imgsrc: sell1,
    title: "Book an Appointment",
    text: "It only takes 2 minutes to book an inspection slot.",
    link: "",
  },
  {
    id: 2,
    imgsrc: sell2,
    title: "Free Car Inspection",
    text: "Our professionals will inspect your car in just 30 minutes!",
    link: "",
  },
  {
    id: 3,
    imgsrc: sell3,
    title: "Sell Your Car",
    text: "Accept our offer on the spot, or opt for bidding with Carsome's network of dealers!",
    link: "",
  },
  {
    id: 4,
    imgsrc: sell4,
    title: "Get Paid in 1 Hour",
    text: "Plus, leave all the paperwork to us for a hassle-free experience.",
    link: "",
  },
];

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

  const [interactive, setInteractive] = useState("how_buy");
  const [initPage, setInitPage] = useState(0);

  const [listComment, setListComment] = useState([
    {
      id: 1,
      usename: "Atie Baharun",
      comment: "Berbaloi...jual dan beli kereta di Carsome..service yang yang sangat bagus di samping staff yang awesome..jual kereta lama dengan harga yang tinggi..perbezaan harga yang ketara dengan syarikat kereta terpakai lain..kemudian dapat beli model kereta 2020 dengan diskaun lagi rm500 dan free gift lain hanya di Carsome..sangat berbaloi..saya syorkan Carsome pada anda semua👍👍👍",
    },
    {
      id: 2,
      usename: "Azlan Alan",
      comment: "sell old get new car..  get yours",
    },
    {
      id: 3,
      usename: "Yee Heikin",
      comment: "A good platform to sell and buy car. I sell my car BGH7957 at good rate compared to the price trade-in to others used car. I also get new used car at perfect condition and reasonable price. No hidden costs with a year warranty.  Staff is friendly, helpful and efficiency. SUPERB!!!",
    },
    {
      id: 4,
      usename: "Ika Yusof",
      comment: "jual beli kereta yg sah terpakai",
    },
    {
      id: 5,
      usename: " Mohd Shahriza Adnan",
      comment: "-SOLD MYVI BUY GRAND LIVINA-AWESOME EXPERIENCE!!!CEPAT MUDAH DAN DIPERCAYAI.... HARGA YANG TINGGI.....THANKS A LOT... BYE MY SWEET WHITE...-CCJ3842-WELCOME HOME WHITE CUBBY-BMM3131-",
    },
  ]);

  const onChangeBuySell = (e) => {
    setInteractive(e.detail.value);
    setInitPage(0);
  };

  return (
    <IonPage>
      <IonContent fullscreen className={style.back_ground_content}>
        <>
          <Swiper pagination={true} modules={[Autoplay,Pagination]} 
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
          >
            <SwiperSlide>
              <IonImg src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <IonImg src={img4} />
            </SwiperSlide>
          </Swiper>
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
          <Swiper slidesPerView={2}>
            {searchListText.map((item, index) => (
              <SwiperSlide className={style.ion_slide_buttom} key={index}>
                <IonButton className={style.w_buttom} color="light">
                  <span className={style.font_size_buttom}>{item}</span>
                </IonButton>
              </SwiperSlide>
            ))}
            <SwiperSlide className={style.ion_slide_buttom}>
              <IonButton className={style.w_buttom} color="light">
                <span className={`${style.font_size_buttom} ${style.bt_color}`}>
                  View All Cars
                </span>
              </IonButton>
            </SwiperSlide>
          </Swiper>
        </>
        <>
          <div className={style.history_viewer}>
            <div className={style.history_viewer_title}>
              <h3>Browsing History</h3>
            </div>
          </div>
          <Swiper
            slidesPerView={"auto"}
            style={{ paddingBottom: "20px" }}
          >
            {historyListCar.map((item) => (
              <SwiperSlide className={style.wHistory} key={item.id}>
                <HistoryBrowCar historyListCar={item}></HistoryBrowCar>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className={style.view_more}>
                <div className={style.view_more_detail}>
                  <i></i>
                  View More Cars
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
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
          <Swiper
            slidesPerView={"auto"}
            style={{ paddingBottom: "20px" }}
          >
            {listCarView.map((item) => (
              <SwiperSlide className={style.wHistory} key={item.id}>
                <HistoryBrowCar historyListCar={item}></HistoryBrowCar>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className={style.view_more_popular}>
                <div className={style.view_more_popular_detail}>
                  <i></i>
                  View More Popular Cars
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IonSegment
              className={style.how_buy_sell}
              value={interactive}
              onIonChange={(e) => onChangeBuySell(e)}
            >
              <IonSegmentButton value="how_buy">
                <IonLabel>How to Buy</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="how_sell">
                <IonLabel>How to Sell</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </div>

          {interactive === "how_buy" && (
            <div style={{ marginTop: "32px" }}>
              <Swiper slidesPerView={"auto"}>
                {listBuy.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={style.how_buy_sell_swiper}
                  >
                    <HowtoBuySell listItem={item} isBuy={true}></HowtoBuySell>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {interactive === "how_sell" && (
            <div style={{ marginTop: "32px" }}>
              <Swiper slidesPerView={"auto"}>
                {listSell.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className={style.how_buy_sell_swiper}
                  >
                    <HowtoBuySell listItem={item} isBuy={false}></HowtoBuySell>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        <div className={style.happy_customer_total}>
          <div className={style.happy_customer_title}>
            <h3>Happy Customers</h3>
          </div>
          <div className={style.fb_review_total}>
            <div className={style.fb_review_header}>
              <div className={style.fb_vote_total}>
                <div className={style.fb_vote_icon}></div>
                <div className={style.fb_vote_rating_total}>
                  <div className={style.fb_vote_rating_content}>
                    <div className={style.fb_vote_rating_point}>4.9</div>
                    <div className={style.fb_vote_rating_start}>
                      <button
                        type="button"
                        className={style.fb_vote_rating_start_style}
                      ></button>
                      <button
                        type="button"
                        className={style.fb_vote_rating_start_style}
                      ></button>
                      <button
                        type="button"
                        className={style.fb_vote_rating_start_style}
                      ></button>
                      <button
                        type="button"
                        className={style.fb_vote_rating_start_style}
                      ></button>
                      <button
                        type="button"
                        className={style.fb_vote_rating_start_style}
                      ></button>
                    </div>
                  </div>
                  <div className={style.fb_vote_rate_foter}>
                    Out of 2,598 total reviews
                  </div>
                </div>
              </div>
            </div>

            <div className={style.fb_review_body}>
              <Swiper slidesPerView={"auto"}>
                {listComment.map((item) => (
                  <SwiperSlide key={item.id} className={style.comment_slide}>
                    <CommentUser listCmt={item}></CommentUser>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
