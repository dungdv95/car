import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './FavoritesPage.css';

const FavoritesPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="FavoritesPage page" />
      </IonContent>
    </IonPage>
  );
};

export default FavoritesPage;
