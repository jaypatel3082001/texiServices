import React from 'react'

function AboutUs() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center my-10">
        <h1 className="text-5xl font-bold">
          About Us
        </h1>
      </div>
      <div className='bg-gradient-to-b from-gray-300 to-gray-200 py-12'>
  <div className='flex justify-center'>
    <div className='max-w-[1312px] p-6 bg-white shadow-xl rounded-lg'>

      {/* Mission Section */}
      <div className='flex justify-between items-center mb-10'>
        <div className='basis-[48%]'>
          <h3 className='text-blue-500 text-3xl font-semibold mb-4'>Our Mission</h3>
          <p className='text-gray-700 text-lg leading-relaxed'>
          At Sydney Taxi Service, our mission is to provide top-tier, reliable, and comfortable travel solutions that cater to your unique needs. Whether it's a business trip, a ride to the airport, or exploring the city, we prioritize your convenience and comfort. With our modern fleet and professional drivers, we ensure that every journey is smooth and stress-free. Booking a taxi is quick and easy with our user-friendly online system.
          </p>
        </div>
        <div className='basis-[48%]'>
          <img className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300' src='/our-mission.jpg' alt='Our Mission' />
        </div>
      </div>

      {/* Commitment Section */}
      <div className='flex justify-between items-center mb-10'>
        <div className='basis-[48%]'>
          <img className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300' src='/our-commitment.jpg' alt='Our Commitment' />
        </div>
        <div className='basis-[48%]'>
          <h3 className='text-blue-500 text-3xl font-semibold mb-4'>Our Commitment</h3>
          <p className='text-gray-700 text-lg leading-relaxed'>
          At Sydney Taxi Service, we are fully licensed and insured, prioritizing your safety and comfort at all times. Our dedicated team is focused on ensuring a smooth and enjoyable ride for every passenger. We strive to provide exceptional service around the clock, whether you choose to book online or call us directly.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className='flex justify-between items-center'>
        <div className='basis-[48%]'>
          <h3 className='text-blue-500 text-3xl font-semibold mb-4'>Our Vision</h3>
          <p className='text-gray-700 text-lg leading-relaxed'>
          We are committed to becoming the leading taxi service in Sydney by maintaining the highest safety standards and ensuring all vehicles are equipped with cutting-edge technology. Our vision is to offer every passenger a seamless and enjoyable travel experience, guaranteeing peace of mind on every ride.
          </p>
        </div>
        <div className='basis-[48%]'>
          <img className='w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300' src='/our-vision.jpg' alt='Our Vision' />
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default AboutUs