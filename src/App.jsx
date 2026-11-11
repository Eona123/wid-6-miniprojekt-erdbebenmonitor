import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Map } from "./Map";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [specialEarth, setSpecialEarth] = useState({});
  const [radius, setRadius] = useState(1)
  const [erdbeben, setErdbeben] = useState({})
  const [magnitude, setMagnitude] = useState("4.5")
  const [timeinterval, setTimeInterval] = useState("day")

  useEffect(() => {
    fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${timeinterval}.geojson`)
      .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
      .then((res) => setErdbeben(res)).catch(err => console.error("Fetch failed:", err));
    },
    [magnitude, timeinterval]  // Abhängigkeitsliste, hier leer
  );

  return (
    <div className="app">
      <Header 
        magnitude = {magnitude}
        setMagnitude = {setMagnitude}
        timeinterval = {timeinterval}
        setTimeInterval = {setTimeInterval}/>
      <Sidebar 
        specialEarth={specialEarth}
        radius={radius}
        setRadius={setRadius}/>
      <div className="mainArea">
        <Map
        setSpecialEarth={setSpecialEarth} 
        radius={radius}
        erdbeben = {erdbeben}
        setErdbeben = {setErdbeben}/>
      </div>
    </div>
  );
}

export default App;
