import React, { useEffect, useState } from 'react'
import Popbox from './Popbox'
import Mapmodules from './Mapmodules'
import UserCount from './UserCount'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useJsApiLoader } from '@react-google-maps/api'

function Contents() {
  const inputs=useSelector((state)=>state.input)
  const [loading,setLoading]=useState(inputs.loading)
  const [data,setData]=useState(inputs?.data)
  useEffect(()=>{
    setLoading(inputs.loading)
    if(inputs?.data){

      setData(inputs.data)
    }

  },[inputs.loading,inputs.data])


// if (!isLoaded) {
//   return <div>loding...</div>
// }
return (
  loading === true ? (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-white z-50 p-4">
      {/* Loading Spinner and Message */}
      <div className="text-xl md:text-2xl font-bold text-center mb-6">
        Thank you for contacting us😀! Our team will soon contact you👍
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 w-full md:max-w-[768px]">
        {/* Card for Name */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Name</h2>
          <p>{data.name}</p>
        </div>

        {/* Card for Contact Number */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Contact Number</h2>
          <p>{data.contactNum}</p>
        </div>

        {/* Card for Disabled Access */}
        {data.disabledAccess && (
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Disabled Access</h2>
            <p>{data.disabledAccess ? "Yes" : "No"}</p>
          </div>
        )}

        {/* Card for Child Seat Availability */}
        {data.childAvailability && (
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Child Seat Availability</h2>
            <p>{data.childAvailability ? "Yes" : "No"}</p>
          </div>
        )}

        {/* Card for Payment Mode */}
        {data.paymentMode && (
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Payment Mode</h2>
            <p>{data.paymentMode}</p>
          </div>
        )}

        {/* Card for Source */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Source</h2>
          <p>{data.source}</p>
        </div>

        {/* Card for Destination */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Destination</h2>
          <p>{data.destination}</p>
        </div>

        {/* Card for Total Distance */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Total Distance</h2>
          <p>{data.totalDistance} km</p>
        </div>

        {/* Card for Passenger Count */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Passenger Count</h2>
          <p>{data.passengerCount}</p>
        </div>

        {/* Card for Time */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Time</h2>
          <p>{data.time}</p>
        </div>

        {/* Card for Date */}
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Date</h2>
          <p>{data.date}</p>
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
        containerStyle={{ marginTop: '50px' }}
      />

      {/* Popbox and Mapmodules */}
      <Popbox />
      <Mapmodules />
    </div>
  )
);

}

export default Contents