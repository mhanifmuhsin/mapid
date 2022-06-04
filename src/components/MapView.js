import React, { useMemo, useState, useEffect } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import axios from "axios";
import { config } from "../config";
import "mapbox-gl/dist/mapbox-gl.css";

import Pin from "./Pin";
import DetailInfo from "./DetailInfo";

const MAPBOX_TOKEN = ""; // Set your mapbox token here

export default function MapView() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [response, setResponse] = useState();
  const URL = config.api_host;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(URL);
        setResponse(response.data.geojson);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Loading");
      }
    })();
  }, [URL]);

  const pins = useMemo(
    () =>
      response &&
      response?.features.map((data, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={data.geometry.coordinates[0]}
          latitude={data.geometry.coordinates[1]}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(data);
          }}
        >
          <Pin status={data.properties.Status} />{" "}
        </Marker>
      )),
    [response]
  );

  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: 107.58467149401622,
        latitude: -6.91774733368014,
        zoom: 13,
        bearing: 0,
        pitch: 0,
      }}
      style={{ width: 1700, height: 1000 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.geometry.coordinates[0])}
          latitude={Number(popupInfo.geometry.coordinates[1])}
          onClose={() => setPopupInfo(null)}
          style={{ width: 150 }}
        >
          <DetailInfo popupInfo={popupInfo} />
        </Popup>
      )}
    </Map>
  );
}
