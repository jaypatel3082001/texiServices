import React, { useState } from 'react'
// import { GoogleMap, Marker } from '@react-google-maps/api';
// import { useJsApiLoader } from '@react-google-maps/api'
import { EmailSvg, MapSvg, PhnSvg } from './Svg';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

// const center={
//     lat:-33.868820,
//     lng:151.209290
// }
function ContactUs() {
    // const { isLoaded } = useJsApiLoader({
    //     googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     libraries:['places']
    // })
    const [mapCenter, setMapCenter] = useState([-33.868820, 151.209290]); // Default center
  const [locations, setLocations] = useState([]); // To store Ola Krutim API data
    // if (!isLoaded) {
    //     return <div>loding...</div>
    //   }
  return (
    <div className="w-full">
    {/* Header */}
    <div className="w-full flex justify-center my-10">
      <h1 className="text-5xl font-bold">
        Contact Us
      </h1>
    </div>

    {/* Content */}
    <div className="flex justify-center bg-gradient-to-b from-gray-300 to-gray-200 py-12">
      <div className="min-w-[1312px] mx-auto flex flex-wrap lg:flex-nowrap items-center gap-8 p-6 bg-white shadow-lg rounded-lg">
        {/* Left Side: Find Us (Map) */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Find Us</h2>
          <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
            {/* <GoogleMap
              center={mapCenter}
              zoom={14}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetView: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              <Marker position={mapCenter} />
            </GoogleMap> */}
            <MapContainer
  center={mapCenter}
  zoom={13}
  style={{
    height: "100%",
    width: "100%",
    position: "relative",  // Make sure the position is set
    zIndex: 10            // Set the desired z-index
  }}
>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {locations.map((location, index) => (
      <Marker
        key={index}
        position={[location.latitude, location.longitude]}
        icon={DefaultIcon}
      >
        <Popup>{location.name}</Popup>
      </Marker>
    ))}
  </MapContainer>
          </div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-1/3 space-y-8">
          {/* Location Info */}
          <div className="flex items-center space-x-4 bg-indigo-50 p-6 rounded-lg shadow-sm">
            <MapSvg className="w-8 h-8 text-indigo-600" />
            <p className="text-lg font-medium text-gray-700">Sydney, Australia</p>
          </div>

          {/* Phone Info */}
          <div className="flex items-center space-x-4 bg-purple-50 p-6 rounded-lg shadow-sm">
            <PhnSvg className="w-8 h-8 text-purple-600" />
            <p className="text-lg font-medium text-gray-700">0479 121 833</p>
          </div>

          {/* Email Info */}
          <div className="flex items-center space-x-4 bg-blue-50 p-6 rounded-lg shadow-sm">
            <EmailSvg className="w-8 h-8 text-blue-600" />
            <p className="text-lg font-medium text-gray-700">booktaxi2312@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ContactUs