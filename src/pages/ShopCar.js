import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ShopCar.css';

const ShopCar = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="ShopCar page" />
      </IonContent>
    </IonPage>
  );
};

export default ShopCar;
