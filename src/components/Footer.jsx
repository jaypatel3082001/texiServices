import React, { useEffect, useState } from 'react'
import  useWindowSize  from './useWindowSize'
import { BottomSvg, FacebookSvg, InstaSvg, LinkdinSvg, TweeterSvg } from './Svg';
import { Link } from 'react-router-dom';

function Footer() {



  return (
  <footer className="bg-custom-dark text-[#FFC107] xl:py-10 flex justify-center max-[768px]:pt-8 max-[700px]:pb-0">
  <div className="flex xl:max-w-[1312px] max-xl:w-full max-xl:px-10 max-[600px]:px-4 justify-center">
    <div className="w-full mt-7 font-inter max-[700px]:flex max-[700px]:flex-col-reverse max-[700px]:mt-0">
    <div className='flex justify-center w-full max-[700px]:mt-10'>

      <div className="flex justify-between xl:min-w-[1312px] mb-10 items-center max-[700px]:flex-col max-[700px]:m-0">

        <div className="flex items-center space-x-5 max-[700px]:mb-5">
          <div className="text-2xl font-bold">🚖Sydney Taxi services</div>
          {/* <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-[#FFC107] hover:text-black transition">
            Book Silver Taxi Online
          </button> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex max-[430px]:flex-wrap max-[430px]:justify-center space-x-3">
          <a href="https://www.facebook.com/" target="_blank" className="rounded-full border p-3">
            <FacebookSvg />
          </a>
          <a href="https://x.com/" target="_blank" className="rounded-full border p-3">
            <TweeterSvg />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="rounded-full border p-3">
            <LinkdinSvg />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="rounded-full border p-3">
            <InstaSvg />
          </a>
        </div>
      </div>
    </div>

      {/* Footer Content Sections */}
      <div className="flex justify-around mt-10 text-white">
        <div className='max-w-[20%] max-[613px]:hidden'>
          <h3 className="text-xl font-semibold mb-3 underline">About Us</h3>
          <p>Sydney Taxi Service provides reliable, 24/7 transportation with a modern fleet to ensure your ride is smooth and hassle-free. Whether for local trips or airport transfers, book online or call us for top-quality service, anytime.</p>
        </div>

        <div className='max-w-[30%]'>
          <h3 className="text-xl font-semibold mb-3 underline">Useful Links</h3>
          <ul className="space-y-2">

            <li className='mx-4 hover:text-[#89bc21]'>
                            <Link to="/home">
                                Home
                            </Link>
                        </li>

                        <li className='mx-4 hover:text-[#89bc21]'> <Link to="/about-us">About Us</Link></li>
                        <li className='mx-4 hover:text-[#89bc21]'>   <Link to="/services"> Services</Link></li>
                        <li className='mx-4 hover:text-[#89bc21]'>  <Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>



        <div className='max-w-[30%]'>
          <h3 className="text-xl font-semibold mb-3 underline">Contact Us</h3>
          <p>New South Wales, Australia</p>
          <p>Email: <a href="mailto:info@silverairporttaxis.com.au" className="hover:text-[#89bc21] break-words">info@silverairporttaxis.com.au</a></p>
          <p>Phone: <a href="tel:1300912141" className="hover:text-[#89bc21]">1300 912 141</a></p>
          <p>Available 24/7 365 Days</p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer