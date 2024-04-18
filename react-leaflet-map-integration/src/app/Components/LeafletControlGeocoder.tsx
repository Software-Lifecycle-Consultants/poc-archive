"use client";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { Geocoder, geocoders } from "leaflet-control-geocoder";

interface PositionInfo {
  address: string;
}

interface LeafletControlGeocoderProps {
  positionInfos: PositionInfo[];
}

const LeafletControlGeocoder: React.FC<LeafletControlGeocoderProps> = (
  props
) => {
  const map = useMap();
  const { positionInfos } = props;

  useEffect(() => {
    const geocoder = new geocoders.Nominatim(); //contert address to latlng

    positionInfos.forEach((positionInfo) => {
      const address = positionInfo.address;
      if (address) {
        geocoder.geocode(address, (resultArray: any[]) => {
          if (resultArray.length > 0) {
            const result = resultArray[0];
            const latlng = result.center;

            const customIcon = new L.Icon({
              //customized map marker
              iconUrl: "https://www.svgrepo.com/show/362123/map-marker.svg",
              iconSize: [30, 50],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            });
            L.marker(latlng, { icon: customIcon })
              .addTo(map)
              .bindPopup(result.name);
            map.fitBounds(result.bbox);
          }
        });
      }
    });
  }, [map, positionInfos]);

  return null;
};

export default LeafletControlGeocoder;
