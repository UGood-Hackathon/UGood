import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './styles.css';

const Start: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="logo-text">U GOOD?</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="subtitle">Start</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className="start-button">
        <IonCardContent>
          click me to send a text to your phone with instructions
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
  );
};

export default Start;
