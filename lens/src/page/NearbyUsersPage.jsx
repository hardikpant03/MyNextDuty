import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import LocationPicker from "../components/map/LocationPicker";
import NearbyUsersMap from "../components/map/NearbyUsersMap";
import {
  updateUserLocation,
  getNearbyUsers,
} from "../service/location.service";

const NearbyUsersPage = () => {
  const userId = Number(localStorage.getItem("userId"));
  const { location, error } = useGeolocation();

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [nearbyUsers, setNearbyUsers] = useState([]);

  useEffect(() => {
    if (location) setSelectedLocation(location);
  }, [location]);

  const confirmLocation = async () => {
    console.log("Saving location:", selectedLocation);
    await updateUserLocation(userId, {
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
    });

    const res = await getNearbyUsers(userId);
     console.log("Nearby users:", res.data.data);
    setNearbyUsers(res.data.data);
  };

  if (error) return <p>{error}</p>;
  if (!selectedLocation) return <p>Fetching location…</p>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Set Your Location</h1>

      <LocationPicker
        location={selectedLocation}
        onChange={setSelectedLocation}
      />

      <button
        onClick={confirmLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Confirm Location
      </button>

      {nearbyUsers.length > 0 && (
        <>
          <h2 className="text-lg font-semibold">Nearby Users</h2>
          <NearbyUsersMap
            users={nearbyUsers}
            center={[
              selectedLocation.latitude,
              selectedLocation.longitude,
            ]}
          />
        </>
      )}
    </div>
  );
};

export default NearbyUsersPage;
