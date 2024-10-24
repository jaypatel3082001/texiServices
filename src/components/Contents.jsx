import React, { useEffect, useState } from "react";
import Popbox from "./Popbox";
import Mapmodules from "./Mapmodules";
import UserCount from "./UserCount";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useJsApiLoader } from '@react-google-maps/api'

function Contents() {
  const inputs = useSelector((state) => state.input);
  const [loading, setLoading] = useState(inputs.loading);
  const [data, setData] = useState(inputs?.data);
  useEffect(() => {
    setLoading(inputs.loading);
    if (inputs?.data) {
      setData(inputs.data);
    }
  }, [inputs.loading, inputs.data]);

  // if (!isLoaded) {
  //   return <div>loding...</div>
  // }
  return loading === true ? (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white z-50 p-4">
      {/* Loading Spinner and Message */}
      <div className="text-xl md:text-2xl font-bold text-center mb-6">
        {/* Thank you for contacting us😀! Our team will soon contact you👍 */}
     
        <h1 class="font-kaushan text-4xl tracking-wider text-[#5892FF] mb-5">
          Thank you !
        </h1>
        <p>Thanks for contacting us. </p>
        <p>Our team will soon contact you</p>
      </div>

      <div className="flex justify-center items-center bg-gray-100 p-4">
  <div className="bg-white shadow-lg rounded-lg w-full md:max-w-[768px] overflow-hidden">
    <div className="p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <h1 className="text-2xl font-bold mb-2">Ride Details</h1>
      <p className="text-sm">Below are the details of your ride.</p>
    </div>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Name</h2>
        <p className="text-gray-800">{data.name}</p>
      </div>

      {/* Contact Number */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Contact Number</h2>
        <p className="text-gray-800">{data.contactNum}</p>
      </div>

      {/* Disabled Access */}
      {data.disabledAccess && (
        <div>
          <h2 className="text-lg font-semibold mb-1 text-blue-600">Disabled Access</h2>
          <p className="text-gray-800">{data.disabledAccess ? "Yes" : "No"}</p>
        </div>
      )}

      {/* Child Seat Availability */}
      {data.childAvailability && (
        <div>
          <h2 className="text-lg font-semibold mb-1 text-blue-600">Child Seat Availability</h2>
          <p className="text-gray-800">{data.childAvailability ? "Yes" : "No"}</p>
        </div>
      )}

      {/* Payment Mode */}
      {data.paymentMode && (
        <div>
          <h2 className="text-lg font-semibold mb-1 text-blue-600">Payment Mode</h2>
          <p className="text-gray-800">{data.paymentMode}</p>
        </div>
      )}

      {/* Source */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Source</h2>
        <p className="text-gray-800">{data.source}</p>
      </div>

      {/* Destination */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Destination</h2>
        <p className="text-gray-800">{data.destination}</p>
      </div>

      {/* Total Distance */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Total Distance</h2>
        <p className="text-gray-800">{data.totalDistance} km</p>
      </div>

      {/* Passenger Count */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Passenger Count</h2>
        <p className="text-gray-800">{data.passengerCount}</p>
      </div>

      {/* Time */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Time</h2>
        <p className="text-gray-800">{data.time}</p>
      </div>

      {/* Date */}
      <div>
        <h2 className="text-lg font-semibold mb-1 text-blue-600">Date</h2>
        <p className="text-gray-800">{data.date}</p>
      </div>
    </div>
  </div>
</div>

    </div>
  ) : (
    <div className="relative min-h-screen max-md:h-auto">
      {/* ToastContainer */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        containerStyle={{ marginTop: "50px" }}
      />

      {/* Popbox and Mapmodules */}
      <Popbox />
      <Mapmodules />
    </div>
  );
}

export default Contents;
