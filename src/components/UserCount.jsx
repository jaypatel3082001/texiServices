import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function UserCount() {
  const [userCount, setUserCount] = useState(null);
  const [loading, setLoading] = useState(true);  // Added loading state
  const dispatch = useDispatch();

  useEffect(() => {
    handelUserCount();
  }, []);

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
        localStorage.setItem('revisedIp', newRevisedIp);
      }

      setUserCount(responseData.data.userCount);
      setLoading(false);  // Set loading to false once data is fetched

      // If you want to dispatch the user count to redux
      // dispatch(setUserCount(responseData.data.userCount));

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setLoading(false);  // Set loading to false even in case of error
    }
  };

  return (
    loading ? (
      <div className="absolute top-0 w-full h-screen flex justify-center items-center bg-white z-40">
        <div className="text-5xl text-black">Loading...</div>
      </div>
    ) : (
      <div className="relative bg-[#FFC107] text-white">
        {/* Checkered Stripe */}
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
      </div>
    )
  );
}

export default UserCount;
