import React, { useEffect, useState } from 'react'
import {  FacebookSvg, InstaSvg, LinkdinSvg, TweeterSvg } from './Svg';
import { Link } from 'react-router-dom';
import UserCount from './UserCount';

function Footer() {
  return (
    <footer className="bg-custom-dark text-white xl:py-10 flex justify-center max-[768px]:pt-8 max-[450px]:pt-0">
      <div className="flex xl:max-w-[1312px] max-xl:w-full max-xl:px-10 max-[600px]:px-4 justify-center max-md:pb-8">
        <div className="w-full mt-7 font-inter max-[700px]:flex max-[700px]:flex-col-reverse max-[700px]:mt-0">
          <div className='flex justify-center w-full'>

            <div className="flex justify-between xl:min-w-[1312px] max-xl:w-full mb-10 items-center max-[700px]:flex-col max-[700px]:m-0">

              <div className="flex items-center space-x-5 max-[700px]:mb-5">
                <div className="text-2xl font-bold">🚖 BookTaxi Services</div>
                {/* <button className="bg-white text-black px-5 py-2 rounded-md hover:bg-[#FFC107] hover:text-black transition">
            Book Silver Taxi Online
          </button> */}
              </div>
              <div className="max-[450px]:flex hidden justify-center items-center max-[450px]:pb-2">
                <span className="pr-2 text-sm max-[400px]:text-[10px]">Privacy Policy</span>
                <span className="border-l-2 border-r-2 border-gray-400 px-2 text-sm max-[400px]:text-[10px]">Terms & Conditions</span>
                <span className="pl-2 flex text-sm max-[400px]:text-[10px]">Collection Statement</span>
              </div>
              <div className="max-[450px]:flex hidden justify-center items-center max-[450px]:pb-8">
              <span className="flex text-sm max-[400px]:text-[10px]"> BookTaxiService © 2024</span>
              </div>
              {/* Social Media Icons */}
              <div className="flex max-[430px]:flex-wrap max-[430px]:justify-center space-x-3">
                {/* <a href="https://www.facebook.com/" target="_blank" className="rounded-full border p-3">
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
                </a> */}
                <UserCount />
              </div>
            </div>
          </div>

          {/* Footer Content Sections */}
          <div className="flex justify-around mt-10 text-white">
            <div className='max-w-[20%] max-[613px]:hidden'>
              <h3 className="text-xl font-semibold mb-3 underline">About Us</h3>
              <p> BookTaxiService provides reliable, 24/7 transportation with a modern fleet to ensure your ride is smooth and hassle-free. Whether for local trips or airport transfers, book online or call us for top-quality service, anytime.</p>
            </div>

            <div className='max-w-[30%] max-[450px]:hidden'>
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



            <div className='max-w-[30%] max-[450px]:hidden'>
              <h3 className="text-xl font-semibold mb-3 underline">Contact Us</h3>
              <p>Sydney, Australia</p>
              <p>Email: <a href="mailto:BookTaxi2312@gmail.com" className="hover:text-[#89bc21] break-words">booktaxi2312@gmail.com</a></p>
              <p>Phone: <a href="tel:1300912141" className="hover:text-[#89bc21]">0479 121 833</a></p>
              <p>Available 24/7 365 Days</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer