import React, { useEffect } from 'react'
import Popbox from './Popbox'
import Mapmodules from './Mapmodules'
import UserCount from './UserCount'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useJsApiLoader } from '@react-google-maps/api'

function Contents() {
  // const inputs=useSelector((state)=>state.input.userCount)


// if (!isLoaded) {
//   return <div>loding...</div>
// }
  return (
    <div className='relative min-h-screen max-md:h-auto'>
 <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
/>

<Popbox />
<Mapmodules />
<UserCount />
    </div>
  )
}

export default Contents