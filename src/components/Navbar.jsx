import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex w-full bg-[#212529] text-[#FFC107] justify-center'>
            <div className='flex py-4 justify-between min-w-[1312px]'>
                <div>TaxiLogo</div>
                <div>
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
            </div>
        </div>

    )
}

export default Navbar