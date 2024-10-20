import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CancelSvg, MenuSvg } from './Svg'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log("first")
        setIsOpen(!isOpen);
    };
    console.log("isOpen",isOpen)
    return (
        <div className='flex w-full bg-[#212529] text-[#FFC107] justify-center'>
            <div className='flex py-4 justify-between xl:min-w-[1312px] max-xl:w-full max-xl:px-4'>
                <div>TaxiLogo</div>
                <div className='max-[525px]:hidden'>
                    <ul className='flex'>
                        <li className='mx-4 hover:text-[#28A745]'>
                            <Link to="/home">
                                Home
                            </Link>
                        </li>

                        <li className='mx-4 hover:text-[#28A745]'> <Link to="/about-us">About Us</Link></li>
                        <li className='mx-4 hover:text-[#28A745]'>   <Link to="/services"> Services</Link></li>
                        <li className='mx-4 hover:text-[#28A745]'>  <Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='hidden max-[525px]:flex max-[525px]:flex-col max-[525px]:justify-center text-[#FFC107]'  onClick={toggleMenu}>
                    <MenuSvg />
                </div>
                {isOpen && (
  <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md flex flex-col items-center md:hidden z-40">
  <div className='flex justify-end w-full py-10'>
    <span onClick={toggleMenu} className='mr-6'><CancelSvg /></span>
  </div>
    <ul className="flex flex-col items-center z-50">
      <li className="py-2 hover:text-[#28A745]">
        <Link to="/home" onClick={toggleMenu}>Home</Link>
      </li>
      <li className="py-2 hover:text-[#28A745]">
        <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
      </li>
      <li className="py-2 hover:text-[#28A745]">
        <Link to="/services" onClick={toggleMenu}>Services</Link>
      </li>
      <li className="py-2 hover:text-[#28A745]">
        <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
      </li>
    </ul>
  </div>
)}

            </div>
        </div>

    )
}

export default Navbar