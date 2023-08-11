


// git remote add origin https://github.com/fotomain/vit_ionic_play1.git
// ionic build
// ionic build--prod; ionic cap copy --prod; ionic serve
// npm i swiper
//=== DOC COOL https://thetechbee.medium.com/creating-a-slide-using-swiper-js-in-ionic-react-in-5-steps-2022-mobile-app-development-for-52f4cb80d2ce

import React from "react";

import {IonApp, IonContent, IonRouterOutlet, setupIonicReact} from '@ionic/react';

import SwiperHerou from './pages/SwiperHerou';


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

import AppInitRedux from "./AppInitRedux";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
      {/*https://www.freecodecamp.org/news/css-positioning-and-flexbox-explained/*/}
      <IonContent fullscreen>

          <AppInitRedux />
          {/*<SwiperHerou/>*/}

      </IonContent>
  </IonApp>
);

export default App;

