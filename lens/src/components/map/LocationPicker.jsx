import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { defaultMarkerIcon } from "../../util/leafletIcon";
import "leaflet/dist/leaflet.css";
import "./map.scss";

const LocationPicker = ({ location, onChange }) => {
  return (
    <MapContainer
      center={[location.latitude, location.longitude]}
      zoom={16}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={[location.latitude, location.longitude]}
        draggable
        icon={defaultMarkerIcon}
        eventHandlers={{
          dragend: (e) => {
            const { lat, lng } = e.target.getLatLng();
            onChange({ latitude: lat, longitude: lng });
          },
        }}
      />
    </MapContainer>
  );
};

export default LocationPicker;
