import React from 'react'

function Navbar() {
    return (
        <div className='flex w-full bg-custom-dark text-white'>
            <div className='flex px-10 py-4 justify-between w-full'>
                <div>logo</div>
                <div>
                    <ul className='flex'>
                        <li className='mx-4'>Home</li>
                        <li className='mx-4'>About Us</li>
                        <li className='mx-4'>Services</li>
                        <li className='mx-4'>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar