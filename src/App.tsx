import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle,homeOutline,carOutline,heart,person } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import ShopCar from './pages/ShopCar';
import FavoritesPage from './pages/FavoritesPage';
import Account from './pages/Account'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
          <Route exact path="/shopcar">
            <ShopCar />
          </Route>
          <Route exact path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="homepage" href="/homepage">
            <IonIcon icon={homeOutline} />
            <IonLabel>HOME</IonLabel>
          </IonTabButton>

          <IonTabButton tab="shopcar" href="/shopcar">
            <IonIcon icon={carOutline} />
            <IonLabel>SHOP CARS</IonLabel>
          </IonTabButton>

          <IonTabButton tab="favorites" href="/favorites">
            <IonIcon icon={heart} />
            <IonLabel>FAVORITES</IonLabel>
          </IonTabButton>

          <IonTabButton tab="account" href="/account">
            <IonIcon icon={person} />
            <IonLabel>ACCOUNT</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
