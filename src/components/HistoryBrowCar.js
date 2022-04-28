import { useState } from "react";
import style from "./HistoryBrowCar.module.css";
import {
  IonImg,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSlides,
  IonSlide,
} from "@ionic/react";
import { Navigation, Keyboard, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../img/carsomelog.svg";


function HistoryBrowCar(props) {
  const listCar = props.historyListCar;
  // console.log(listCar.imgcar);
  return (
    <IonCard style={{ margin: "unset" }}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}>
        {listCar.imgcar.map((item, index) => (
          <SwiperSlide className={style.wHistory} key={index} style={{height:'100%'}}>
            <IonImg style={{ height: "172px", width: "288px" }} src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <IonCardContent className={style.pd_card_content}>
        <div className={style.mode_card_content}>
          <div className={style.mode_card_logo}>
            <div className={style.card_logo}></div>
          </div>
          <button type="button" className={style.card_content_button}>
            <span className={style.card_content_span}>
              <div className={style.card_heart_logo}></div>
            </span>
          </button>
          <a className={style.card_name_car}>
            <div className={style.ver_car}>{listCar.vercar}</div>
            <div className={style.name_car}>{listCar.namecar}</div>
          </a>
          <div className={style.detail_car}>
            <span className={style.detail_car_span1}>
              {listCar.detail.distance}
            </span>
            <span className={style.detail_car_span1}>
              {listCar.detail.type}
            </span>
            <span className={style.detail_car_span2}>
              {listCar.detail.address}
            </span>
          </div>
          <div className={style.card_tags}>
            {listCar.tagcar.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className={style.card_price}>
            <div className={style.card_price_total}>
              RM <strong>{listCar.priceTotal}</strong>
            </div>
            <div className={style.card_price_month}>
              <div className={style.card_price_month_detail}>
                <span className={style.card_price_month_detail_span1}>
                  RM <strong>{listCar.priceMonth}</strong>
                </span>
                <span className={style.card_price_month_detail_span2}></span>
              </div>
              {/* <div className={style.card_price_hidden}></div> */}
            </div>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
}

export default HistoryBrowCar;
