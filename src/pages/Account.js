import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab3.css';

const Account = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="Account page" />
      </IonContent>
    </IonPage>
  );
};

export default Account;