import { useState } from "react";
import {IonImg } from "@ionic/react";
import perodua from "../img/perodua.png";
import honda from "../img/honda.png";
import kia from "../img/kia.png";
import mazda from "../img/mazda.png";
import mitsubishi from "../img/mitsubishi.png";
import nissan from "../img/nissan.png";
import proton from "../img/proton.png";
import toyota from "../img/toyota.png";
import style from "./SearchListCar.module.css";
import convertible from "../img/convertible.png";
import coupe from "../img/coupe.png";
import hatchback from "../img/hatchback.png";
import mpv from "../img/mpv.png";
import sedan from "../img/sedan.png";
import suv from "../img/suv.png";
import truck from "../img/truck.png";
import wagon from "../img/wagon.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Pagination,Autoplay } from "swiper";
import "swiper/css";

const slideOpts = {
  slidesPerView: 4,
};

function SearchListCar() {
  return (
    <>
      <Swiper slidesPerView={4}>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={perodua} />
            <p className={style.sizeText}>Perodua</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={honda} />
            <p className={style.sizeText}>Honda</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={toyota} />
            <p className={style.sizeText}>Toyota</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={proton} />
            <p className={style.sizeText}>Proton</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={nissan} />
            <p className={style.sizeText}>Nissan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={mazda} />
            <p className={style.sizeText}>Mazda</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={mitsubishi} />
            <p className={style.sizeText}>Mitsubishi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimg} src={kia} />
            <p className={style.sizeText}>Kia</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper slidesPerView={4}>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={hatchback} />
            <p className={style.sizeText}>Hatchback</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={sedan} />
            <p className={style.sizeText}>Sedan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={suv} />
            <p className={style.sizeText}>SUV</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={mpv} />
            <p className={style.sizeText}>MPV</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={coupe} />
            <p className={style.sizeText}>Coupe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={truck} />
            <p className={style.sizeText}>Truck</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={wagon} />
            <p className={style.sizeText}>Wagon</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{textAlign:"center"}}>
            <IonImg className={style.sizeimgcar} src={convertible} />
            <p className={style.sizeText}>Convertible</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SearchListCar;
