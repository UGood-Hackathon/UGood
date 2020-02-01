import React from 'react';
import { IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const Home: React.FC = () => {
  return (
    <IonPage className="center">
    <IonHeader>
      <IonToolbar>
        <IonTitle className="logo-text">U GOOD?</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className="start-button">
        <IonCardContent>
          Click for Help
        </IonCardContent>
      </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Home;
