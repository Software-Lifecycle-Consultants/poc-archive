"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LeafletControlGeocoder from "../Components/LeafletControlGeocoder";
import "leaflet/dist/leaflet.css";

interface PositionInfo {
  address: string;
}

interface MapProps {
  positionInfos: PositionInfo[];
}

const Map: React.FC<MapProps> = (props) => {
  const { positionInfos } = props;
  const [latLng, setLatLng] = useState({
    lat: 0.0,
    lng: 0.0,
    isLoaded: false,
  });

  useEffect(() => {
    const getLocation = () => {
      if (typeof window !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatLng({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              isLoaded: true,
            });
          },
          (error) => {
            alert(error);
          }
        );
      }
    };

    getLocation();
  }, [setLatLng]);

  return (
    <MapContainer
      center={[latLng.lat, latLng.lng]} //Map container
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "500px",
        width: "500px",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LeafletControlGeocoder positionInfos={positionInfos} />
    </MapContainer>
  );
};

export default Map;
