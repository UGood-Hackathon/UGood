import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const User: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="logo-text">U GOOD?</IonTitle>
      </IonToolbar>
    </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>User details</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default User;
