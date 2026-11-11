import { MapContainer, TileLayer, CircleMarker, Popup, GeoJSON, } from "react-leaflet";

// import data from "./assets/4.5_week.geojson.json";
import plattenboundries from "./assets/plate_boundaries.geojson.json"

// --------------------- Import Material MUI ----------------------------//
import Button from '@mui/material/Button';

export const Map = ({ erdbeben, setErdbeben, setSpecialEarth, radius}) => {
  const earthquakes = erdbeben.features || []; // Wir benötigen nur den Feature-Array aus den Daten

  return (
    <MapContainer
      center={[20, 10]}
      zoom={2}
      style={{ height: "95vh", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <GeoJSON 
        data={plattenboundries}
      />

      {earthquakes.map((d, i) => (
        <CircleMarker
          key={i}
          center={[d.geometry.coordinates[1], d.geometry.coordinates[0]]}
          radius={(d.properties.mag**radius*2)}
          pathOptions={{
          color: '#FF0000',      // Border color (Red)
          fillColor: '#00FF00',
          weight: 2}}
        >
        <Popup>
          <div style={{ textAlign: "center" }}>
            {d.properties.title}
            <br />

            <Button variant="outlined" color = 'info' size = 'small' onClick={() => {
              setSpecialEarth(d)                
            }}>
              Mehr Infos
            </Button>
          </div>
        </Popup>
      </CircleMarker>
    ))}
    </MapContainer>
  );
}
