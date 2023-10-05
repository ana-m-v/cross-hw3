import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonLabel,
  IonItem,
} from "@ionic/react";
import "./Home.css";

// Import your actions
import { setHumans } from "../../store/actions"; // Update the path accordingly
import { AppState } from "@capacitor/app";
import { RootState } from "../../store";

const Home: React.FC = () => {
  const humansInSpace = useSelector((state: RootState) => state.humans);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        const names = data.people.map((person: any) => person.name);
        dispatch(setHumans(names));
      });
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <h2>Humans currently chilling in space</h2>
          <IonList>
            {humansInSpace.map(
              (
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <IonItem key={index}>
                  <IonLabel>{name}</IonLabel>
                </IonItem>
              )
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
