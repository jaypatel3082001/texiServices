import React, { useEffect, useState } from 'react'

function UserCount() {
    const [userCount,setUserCount]=useState(null)  
      useEffect(()=>{
        handelUserCount()
    },[])
    const handelUserCount = async () => {
      try {
        let apiUrl = `${import.meta.env.VITE_BACKEND_LINK}/user/count`;
        const revisedIp = localStorage.getItem('revisedIp');
        
        if (revisedIp) {
          apiUrl += `?revisedIp=${revisedIp}`;
        }
    
        const response = await fetch(apiUrl);
    
    
        const responseData = await response.json();
        const newRevisedIp = responseData?.data?.userIp;
        
        if (newRevisedIp) {
          console.log("sfdgsdgdfs",newRevisedIp)
          localStorage.setItem('revisedIp', newRevisedIp);
        }
        
        console.log(responseData.data);
        setUserCount(responseData.data.userCount);
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    
  return (
    <div className="relative bg-[#FFC107] text-white">
        <div className="checkered-stripe h-6 w-full"></div>
    <div className="flex justify-center items-center min-h-[220px] py-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase text-black">
          Visitor Count
        </h2>
        <div className="mt-4">
          <span className="text-2xl md:text-5xl font-bold text-black">
            {userCount}
          </span>
        </div>
      </div>
    </div>

    {/* Checkered Stripe */}
    <div className="checkered-stripe h-6 w-full"></div>

    {/* Bottom Wave */}
  
  </div>
  )
}

export default UserCount