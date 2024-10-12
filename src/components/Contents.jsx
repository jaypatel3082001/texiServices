import React from 'react'
import Popbox from './Popbox'
import Mapmodules from './Mapmodules'
// import { useJsApiLoader } from '@react-google-maps/api'

function Contents() {

// if (!isLoaded) {
//   return <div>loding...</div>
// }
  return (
    <div className='relative'>
<Popbox />
<Mapmodules />
    </div>
  )
}

export default Contents