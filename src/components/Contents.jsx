import React from 'react'
import Popbox from './Popbox'
import Mapmodules from './Mapmodules'
import UserCount from './UserCount'
// import { useJsApiLoader } from '@react-google-maps/api'

function Contents() {

// if (!isLoaded) {
//   return <div>loding...</div>
// }
  return (
    <div className='relative min-h-screen'>
<Popbox />
<Mapmodules />
<UserCount />
    </div>
  )
}

export default Contents