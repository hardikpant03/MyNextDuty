import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { defaultMarkerIcon } from "../../util/leafletIcon";
import "./map.scss";

const NearbyUsersMap = ({ users, center }) => {
  return (
    <MapContainer center={center} zoom={14} className="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {users.map((u) => (
        <Marker
          key={u.id}
          position={[u.latitude, u.longitude]}
          icon={defaultMarkerIcon}
        >
          <Popup>
            <strong>
              {u.firstName} {u.lastName}
            </strong>
            <br />
            {u.email}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default NearbyUsersMap;
