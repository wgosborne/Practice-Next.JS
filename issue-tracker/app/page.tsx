"use client";

import React, { useEffect, useRef } from "react";
import Map, { GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { NextPage } from 'next';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export default function Home(){

  const mapContainer = useRef<any>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1Ijoid2dvc2Jvcm5lIiwiYSI6ImNscnljOHVjYzBzdDAyam1wN3E5cnVndnAifQ.uYaESyqnlQZuKkQaCYRAJA" || '';
    
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [15.4542, 18.7322], // center map on Chad
      zoom: 1.8
    });

    // Clean up resources when the component is unmounted
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '100vh' }} />
  );
};
