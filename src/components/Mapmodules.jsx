import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline,useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    // If pickup and dropoff points exist, call the handelRoute function to fetch the route data
    if (inputs.pickUp && inputs.dropUp) {
      handelRoute(inputs.pickUp, inputs.dropUp);
    }
  }, [inputs.pickUp, inputs.dropUp]);

  const handelRoute = async (pickUp, dropOff) => {
    const apikey = import.meta.env.REACT_APP_MAPS_API_KEY;
    const url = `https://api.olamaps.io/routing/v1/directions?origin=${pickUp?.lat},${pickUp?.lng}&destination=${dropOff?.lat},${dropOff?.lng}&api_key=${apikey}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.json();
      console.log("Route data:", data);

      // Assuming data.routes[0].geometry.coordinates contains the  polyline coordinates
      if (data && data.routes) {
        const startcord = data.routes[0].legs[0].start_location
        const endcord = data.routes[0].legs[0].end_location
        console.log(startcord,"startcord")
        console.log(endcord,"endcord")
        setRoute([[startcord.lat,startcord.lng],[endcord.lat,endcord.lng]]); // Save the route coordinates
        setMapCenter([startcord.lat, startcord.lng]); // Optionally center the map on the pickup point
        setLocations([pickUp, dropOff]); // Optionally set the pickup and dropoff markers
      }
    } catch (error) {
      console.error("Error fetching route data:", error);
    }
  };
console.log("locationslocations",locations)
console.log("route route..",route)
  return (
    <div className="w-full h-screen z-10">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{
          height: "100%",
          width: "100%",
          position: "relative", // Make sure the position is set
          zIndex: 0, // Set the desired z-index
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />


<ChangeMapView center={mapCenter} />
        {/* Add Markers for pickup and dropoff locations */}
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={DefaultIcon}
          >
            <Popup>{index === 0 ? "Pickup" : "Dropoff"}</Popup>
          </Marker>
        ))}

        {/* Draw the route using Polyline */}
        {route.length > 0 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
}

export default Mapmodules;
