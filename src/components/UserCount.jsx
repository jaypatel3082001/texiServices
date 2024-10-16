import React, { useEffect, useState } from 'react'

function UserCount() {
    const [userCount,setUserCount]=useState(null)  
      useEffect(()=>{
        handelUserCount()
    },[])
    const handelUserCount = async()=>{
   let apiUrl=import.meta.env.VITE_BACKEND_LINK
   const revisedIp = localStorage.getItem('revisedIp');
   if(!revisedIp){

       apiUrl=`${apiUrl}/user/count`
   }else{
    
     apiUrl=`${apiUrl}/user/count?revisedIp=${revisedIp}`
   }

    try{

        fetch(`${apiUrl}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const responseData = await response.json();
       localStorage.setItem('revisedIp',responseData.data.revisedIp);
        console.log(responseData.data);
        setUserCount(responseData.data.userCount)
    }catch(error){
        console.error('There was a problem with the fetch operation:', error);
    }

    }
  return (
    <div>
        <div className="flex w-full py-10 justify-center items-center bg-[#FFC107]">
            <div className="text-3xl font-bold">
                Number Of visitors:
            </div>

        </div>
    </div>
  )
}

export default UserCount