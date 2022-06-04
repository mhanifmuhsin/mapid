import React, { useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import geojson from "../data.json";
import Pin from "./Pin";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWhhbmlmbXVoc2luIiwiYSI6ImNsM3llbmFiYTA3MG0zcG13cm93em05NjAifQ.qURzufWxT30a86dY19EGvQ"; // Set your mapbox token here

export default function MapView() {
  const [popupInfo, setPopupInfo] = useState(null);
  const pins = useMemo(
    () =>
      geojson.features.map((data, index) => (
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
    []
  );

  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: 107.58467149401622,
        latitude: -6.91774733368014,
        zoom: 13,
      }}
      style={{ width: 1700, height: 1000 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {pins}
      {popupInfo && (
        <Popup
          anchor="top"
          longitude={Number(popupInfo.geometry.coordinates[0])}
          latitude={Number(popupInfo.geometry.coordinates[1])}
          onClose={() => setPopupInfo(null)}
        >
          <div style={{ textAlign: "left" }}>
            <p>Nama = {popupInfo.properties.Nama}</p>
            <p>Status = {popupInfo.properties.Status}</p>
            <p>Angka = {popupInfo.properties.Angka}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}
