import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';

const Resources: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle className="logo-text">U GOOD?</IonTitle>
      </IonToolbar>
    </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>Here are some resources!</h2>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Resources;
