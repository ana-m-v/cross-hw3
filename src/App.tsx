import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  personCircleOutline,
  newspaperOutline,
  mapOutline,
} from "ionicons/icons";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import loggingService from "./services/loggingService";

setupIonicReact();

const App: React.FC = () => {
  const handleTabClick = (tabName: string) => {
    loggingService.logClick(tabName);
  };
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton
              tab="home"
              href="/home"
              onClick={() => handleTabClick("home")}
            >
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="map"
              href="/map"
              onClick={() => handleTabClick("map")}
            >
              <IonIcon aria-hidden="true" icon={mapOutline} />

              <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="profile"
              href="/profile"
              onClick={() => handleTabClick("profile")}
            >
              <IonIcon aria-hidden="true" icon={personCircleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="about"
              href="/about"
              onClick={() => handleTabClick("about")}
            >
              <IonIcon aria-hidden="true" icon={newspaperOutline} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
