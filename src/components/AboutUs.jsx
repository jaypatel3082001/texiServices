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
            Our Mission is very simple, which is to provide reliable, luxurious, and comfortable travel solutions with Silver Taxi Sydney services that match your expectations. Whether you are arriving from a long flight, going to a business meeting, or exploring the city, Silver Airport Taxis aims to deliver the best travel experience. You can Pre-Book Your Silver Taxi Sydney with Easy Online Bookings.
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
            Silver Airport Taxis is fully licensed and insured, operating with 24/7 camera surveillance to ensure your safety and security. Our dedicated team works hard to ensure every ride is smooth and enjoyable. Book your Airport Transfer with International & Domestic Terminal Pickup and Drop-off, available 24/7 through online bookings or just with a call.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className='flex justify-between items-center'>
        <div className='basis-[48%]'>
          <h3 className='text-blue-500 text-3xl font-semibold mb-4'>Our Vision</h3>
          <p className='text-gray-700 text-lg leading-relaxed'>
            Silver Airport Taxis is committed to maintaining the highest safety standards with fully licensed and insured vehicles, and 24/7 camera surveillance. Our vision is to provide a seamless, enjoyable ride for all passengers, ensuring peace of mind during every journey.
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