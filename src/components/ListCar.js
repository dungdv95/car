import { useState } from "react";
import {
  IonImg,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import style from "./ListCar.module.css"


function ListCar(props) {
  const carList = props.carDetail;
  console.log(carList)
  return (
    <IonCol>
      <IonCard className={style.car}>
        <IonCardHeader className={style.carheader}>
          <IonCardTitle className={style.cartitle}><strong>{carList.text}</strong></IonCardTitle>
        </IonCardHeader>
        <IonCardContent className={style.carcontent}>
          <IonImg src={carList.carsrc} />
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
}
export default ListCar;
