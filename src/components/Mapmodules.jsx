import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline,useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { setTotalDistance,setTotalDuration } from '../reduxFiles/inputSlice';

const DefaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeMapView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center); // Set the new center
    }
  }, [center, map]);

  return null; // This component only manages map updates, so no render
}

function Mapmodules() {
  const [mapCenter, setMapCenter] = useState([-33.868820, 151.209290]); // Default center
  const [locations, setLocations] = useState([]); // To store markers like pickup and dropoff
  const [route, setRoute] = useState([]); // To store the route coordinates
  const inputs = useSelector((state) => state.input); // Retrieve pickup and dropoff points from the store
  const dispatch=useDispatch()
  // const [totalDistance, setTotalDistance] = useState("");
// const [totalDuration, setTotalDuration] = useState("");

  useEffect(() => {
    // If pickup and dropoff points exist, call the handelRoute function to fetch the route data
    if (inputs.pickUp && inputs.dropUp) {
      handelRoute(inputs.pickUp, inputs.dropUp);
    }
  }, [inputs.pickUp, inputs.dropUp]);

  const handelRoute = async (pickUp, dropOff) => {
    const apikey = import.meta.env.VITE_MAPS_API_KEY;

    // console.log("apikey",apikey)
    const url = `https://api.olamaps.io/routing/v1/routeOptimizer?locations=${pickUp?.lat},${pickUp?.lng}|${dropOff?.lat},${dropOff?.lng}&source=first&destination=last&mode=driving&steps=true&api_key=${apikey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();
      console.log("Route data:", data);

      // Assuming data.routes[0].geometry.coordinates contains the  polyline coordinates
      if (data && data.routes) {
        const startcord = data.routes[0].legs[0].start_location;
        const endcord = data.routes[0].legs[0].end_location;
        const steps = data.routes[0].legs[0].steps;
        const distance = data.routes[0].legs[0].readable_distance;
        const duration = data.routes[0].legs[0].readable_duration;

        // setTotalDistance(distance);

        // setTotalDuration(duration);
        dispatch(setTotalDistance(distance))
        dispatch(setTotalDuration(duration))

        // Extract all steps for the route polyline
        const routeCoordinates = steps.map((step) => [
          [step.start_location.lat, step.start_location.lng],
          [step.end_location.lat, step.end_location.lng],
        ]).flat(); // Flatten the array to use it as a single polyline

        setRoute(routeCoordinates); // Save the route coordinates
        setMapCenter([startcord.lat, startcord.lng]); // Center map on pickup point
        setLocations([pickUp, dropOff]); // Set pickup and dropoe pickup and dropoff markers
      }
    } catch (error) {
      console.error("Error fetching route data:", error);
    }
  };
console.log("locationslocations",locations)
console.log("route route..",route)
// console.log("totalDistance",totalDistance)
// console.log("totalDuration totalDuration..",totalDuration)
  return (
    <div className="w-full h-screen z-10">
     <MapContainer
    center={mapCenter}
    zoom={13}
    style={{
      height: "100%",
      width: "100%",
      position: "relative",
      zIndex: 0,
    }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <ChangeMapView center={mapCenter} />
    {locations.map((location, index) => (
      <Marker key={index} position={[location.lat, location.lng]} icon={DefaultIcon}>
        <Popup>{index === 0 ? "Pickup" : "Dropoff"}</Popup>
      </Marker>
    ))}
    {route.length > 0 && <Polyline positions={route} />}
  </MapContainer>
    </div>
  );
}

export default Mapmodules;
