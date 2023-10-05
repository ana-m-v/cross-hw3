import React, { useState } from "react";
import { IonButton, IonPage } from "@ionic/react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setPosition,
  toggleIssLocation,
  toggleUserLocation,
} from "../../store/actions";
import "leaflet/dist/leaflet.css";
import MapMarker from "../../components/MapMarker/MapMarker";

const MapTab: React.FC = () => {
  const dispatch = useDispatch();
  const showUserLocation = useSelector(
    (state: RootState) => state.showUserLocation
  );
  const showIssLocation = useSelector(
    (state: RootState) => state.showIssLocation
  );

  const handleReset = () => {
    dispatch(setPosition({ lat: 51.505, lng: -0.09 }));
    dispatch(toggleIssLocation(true));
    dispatch(toggleUserLocation(true));
  };

  return (
    <IonPage>
      <IonButton onClick={handleReset}>Show All Data</IonButton>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "500em" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showUserLocation && <MapMarker type="user" />}
        {showIssLocation && <MapMarker type="iss" />}
      </MapContainer>
    </IonPage>
  );
};

export default MapTab;
