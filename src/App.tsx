import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { book, person, home, text } from 'ionicons/icons';
import Home from './pages/Home';
import Start from './pages/Start';
import User from './pages/User';
import Resources from './pages/Resources';
import './pages/styles.css'

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/start" component={Start} />
          <Route path="/user" component={User} />
          <Route path="/resources" component={Resources} />
          <Redirect exact from="/" to="/home" />
          <Route exact path="/" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
          <IonTabButton tab="start" href="/start">
            <IonIcon icon={text} />
            <IonLabel>Start</IonLabel>
          </IonTabButton>
          <IonTabButton tab="user" href="/user">
            <IonIcon icon={person} />
            <IonLabel>User</IonLabel>
          </IonTabButton>
          <IonTabButton tab="resources" href="/resources">
            <IonIcon icon={book} />
            <IonLabel>Resources</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
