import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Map } from "./Map";
import { useState } from "react";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [specialEarth, setSpecialEarth] = useState({});
  const [radius, setRadius] = useState(1)

  return (
    <div className="app">
      <Header />
      <Sidebar 
        specialEarth={specialEarth}
        radius={radius}
        setRadius={setRadius}/>
      <div className="mainArea">
        <Map
        setSpecialEarth={setSpecialEarth} 
        radius={radius}/>
      </div>
    </div>
  );
}

export default App;
