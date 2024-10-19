import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap, Popup } from "react-leaflet";
import polyline from "@mapbox/polyline";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { setTotalDistance, setTotalDuration } from "../reduxFiles/inputSlice";

// Setup default marker icon
const DefaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeMapView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center);
    }
  }, [center, map]);
  return null;
}

function Mapmodules() {
  const [mapCenter, setMapCenter] = useState([-33.868820, 151.209290]); // Default center (Sydney)
  const [locations, setLocations] = useState([]);
  const [route, setRoute] = useState([]); // Holds the main route polyline
  const [stepPolylines, setStepPolylines] = useState([]); // Holds step-by-step polylines
  const inputs = useSelector((state) => state.input);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputs.pickUp && inputs.dropUp) {
      handleRoute(inputs.pickUp, inputs.dropUp);
    }
  }, [inputs.pickUp, inputs.dropUp]);

  const handleRoute = async (pickUp, dropOff) => {
    if (!pickUp || !dropOff || !pickUp.lng || !pickUp.lat || !dropOff.lng || !dropOff.lat) {
      console.error("Invalid pickup or dropoff coordinates.");
      return;
    }

    const apikey = import.meta.env.VITE_AUTOCOMPLETE_API_KEY;

    const pickUpLngLat = `${pickUp.lng},${pickUp.lat}`;
    const dropOffLngLat = `${dropOff.lng},${dropOff.lat}`;

    const url = `https://us1.locationiq.com/v1/directions/driving/${pickUpLngLat};${dropOffLngLat}?key=${apikey}&alternatives=1&steps=true&geometries=polyline&overview=simplified&annotations=false`;

    console.log("Request URL:", url); // Debugging the API URL

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Route data:", data);

      if (data && data.routes && data.routes.length > 0) {
        const route = data.routes[0];

        // Decode the entire route polyline
        const decodedRoute = polyline.decode(route.geometry);
        console.log("Decoded Polyline:", decodedRoute);
        setRoute(decodedRoute);

        // Decode individual step polylines
        const steps = route.legs[0].steps;
        const decodedSteps = steps.map((step) => polyline.decode(step.geometry));
        setStepPolylines(decodedSteps);

        const distance = route.legs[0].distance; // in meters
        const duration = route.legs[0].duration; // in seconds

        // Dispatch actions to update Redux state
        dispatch(setTotalDistance(distance / 1000)); // in kilometers
        dispatch(setTotalDuration(duration/60)); // in seconds

        // Set the map center to the pickup location
        setMapCenter([pickUp.lat, pickUp.lng]);

        // Store locations to render markers
        setLocations([pickUp, dropOff]);

        // Log additional route information
        console.log("Route summary:", route.legs[0].summary);
        console.log("Navigation steps:", steps);
      } else {
        console.error("No routes found in the response.");
      }
    } catch (error) {
      console.error("Error fetching route data:", error.message);
    }
  };

  return (
    <div className="w-full h-screen z-10">
      <MapContainer
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", position: "relative", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <ChangeMapView center={mapCenter} />

        {/* Render Pickup and Drop-off Markers */}
        {locations.map((loc, idx) => (
          <Marker key={idx} position={[loc.lat, loc.lng]}>
            <Popup>{idx === 0 ? "Pickup Location" : "Drop-off Location"}</Popup>
          </Marker>
        ))}

        {/* Render Main Route Polyline */}
        {route.length > 0 && <Polyline positions={route} color="blue" />}

        {/* Render Step-by-Step Polylines */}
        {stepPolylines.map((step, index) => (
          <Polyline key={index} positions={step} color="green" />
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapmodules;
