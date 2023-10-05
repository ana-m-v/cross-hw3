import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { LatLngLiteral } from "leaflet";
import L from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const MapMarker: React.FC<{ type: "user" | "iss" }> = ({ type }) => {
  const [position, setPosition] = useState<LatLngLiteral | null>(null);
  const dispatch = useDispatch();

  const showUserLocation = useSelector(
    (state: RootState) => state.showUserLocation
  );
  const showIssLocation = useSelector(
    (state: RootState) => state.showIssLocation
  );

  const map = useMap();

  useEffect(() => {
    if (type === "user" && navigator.geolocation && showUserLocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userPosition = { lat: latitude, lng: longitude };
          setPosition(userPosition);
          const radius = position.coords.accuracy;
          const circle = L.circle(userPosition, radius);
          circle.addTo(map);
          map.setView(userPosition, 13);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }

    if (type === "iss") {
      const issInterval = setInterval(() => {
        fetch("http://api.open-notify.org/iss-now.json")
          .then((response) => response.json())
          .then((data) => {
            const { iss_position } = data;
            const issPosition = {
              lat: parseFloat(iss_position.latitude),
              lng: parseFloat(iss_position.longitude),
            };
            setPosition(issPosition);
          })
          .catch((error) => {
            console.error("Error fetching ISS location:", error);
          });
      }, 5000);

      return () => {
        clearInterval(issInterval);
      };
    }
  }, [map, type]);

  return (
    <>
      {position !== null && (
        <Marker position={position}>
          <Popup>
            {type === "user"
              ? "You are here."
              : "International Space Station (ISS)"}{" "}
            <br />
            Latitude: {position.lat}, Longitude: {position.lng}
          </Popup>
        </Marker>
      )}
    </>
  );
};

export default MapMarker;
