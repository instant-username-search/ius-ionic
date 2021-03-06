import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <Header />
      </IonContent>
    </IonPage>
  );
};

export default Home;
