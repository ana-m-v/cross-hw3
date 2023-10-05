import React from "react";
import { IonModal, IonContent, IonButton } from "@ionic/react";
import loggingService from "../../services/loggingService";

interface LogsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogsModal: React.FC<LogsModalProps> = ({ isOpen, onClose }) => {
  const logs = loggingService.getLogs();

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonContent className="modal-content">
        <div className="modal-header">
          <h2>Logs</h2>
          <IonButton onClick={onClose}>Close</IonButton>
        </div>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </IonContent>
    </IonModal>
  );
};

export default LogsModal;
