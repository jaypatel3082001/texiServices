import React from 'react'

const services = [
  { title: 'Business Transfer', description: 'Enjoy seamless transportation tailored for corporate clients. Our professional drivers ensure timely pickups and drop-offs, allowing you to focus on your business while we take care of your travel needs.', imgSrc: 'services1.jpg' },
  { title: 'Online Booking', description: 'Experience the convenience of our user-friendly online booking system. Reserve your taxi anytime, anywhere, with just a few clicks. Our platform allows you to schedule rides in advance, providing you with peace of mind.', imgSrc: 'services1.jpg' },
  { title: 'City Transport', description: "Navigate Sydney with ease using our city transport services. Whether you're commuting to work or exploring local attractions, our reliable taxis are always ready to take you wherever you need to go.", imgSrc: 'services1.jpg' },
  { title: 'Airport Transfer', description: 'Travel to and from Sydney Airport with confidence. Our airport transfer service guarantees punctuality and comfort, ensuring that you arrive at your destination relaxed and on time.', imgSrc: 'services1.jpg' },
  { title: 'Address Pickup', description: 'We offer flexible address pickup options to suit your schedule. Simply provide your location, and our drivers will be there promptly to assist you, making your journey as convenient as possible.', imgSrc: 'services1.jpg' },
  { title: 'Taxi Tours', description: "Discover the beauty of Sydney with our tailored taxi tours. Whether you're a tourist or a local, our experienced drivers can guide you to iconic landmarks and hidden gems, providing a personalized sightseeing experience.", imgSrc: 'services1.jpg' }
];
const ServiceCard = ({ title, description, imgSrc }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-yellow-300 mb-4">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
function Services() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center my-10">
        <h1 className="text-5xl font-bold">
          Services
        </h1>
      </div>
      <div className='bg-gradient-to-b from-gray-300 to-gray-200 py-12'>

        <div className='flex justify-center'>
          <div className='min-w-[1312px] p-6 bg-white shadow-xl rounded-lg'>

            {/* Mission Section */}
            <div className="bg-gray-50 py-12">
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    imgSrc={service.imgSrc}
                  />
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Services