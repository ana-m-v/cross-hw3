import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
} from "@ionic/react";
import LogsModal from "../../components/LogsModal/LogsModal";
import loggingService from "../../services/loggingService";
import "./About.css";

import * as packageJson from "../../../package.json";
import profileImage from "../../assets/strider.jpeg";

const version = packageJson.version;

const About: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenLogs = () => {
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="about-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="app-info">
          <IonImg
            src={profileImage}
            className="profile-picture"
            style={{ width: "150px", height: "150px" }}
          />

          <h2>Not all those who wonder are lost</h2>
          <p>package.json version found: {version}</p>
          <h3>Developer Information</h3>
          <p>Developer: Anonymous</p>
          <p>Email: anon@gmail.com</p>
        </div>

        <IonButton onClick={handleOpenLogs} className="open-logs-button">
          Open Logs
        </IonButton>

        <LogsModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </IonContent>
    </IonPage>
  );
};

export default About;
