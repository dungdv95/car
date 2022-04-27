import { useState } from "react";
import style from "./HistoryBrowCar.module.css";
import {
    IonImg,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  } from "@ionic/react";

function HistoryBrowCar(props) {
  const listCar = props.historyListCar;
  console.log(listCar);
  return (
    <>
      <IonCard>
        <IonImg src={listCar.imgcar[0]} />
        <IonCardHeader>
          <IonCardTitle>
            a
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {/* <IonImg src={carList.carsrc} /> */}
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default HistoryBrowCar;
