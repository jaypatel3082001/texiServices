import React from 'react'

const services = [
  { title: 'Business Transfer', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' },
  { title: 'Online Booking', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' },
  { title: 'City Transport', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' },
  { title: 'Airport Transfer', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' },
  { title: 'Address Pickup', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' },
  { title: 'Taxi Tours', description: 'Lorem ipsum dolor sit amet, consectetur auctor aliquet.', imgSrc: 'services1.jpg' }
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