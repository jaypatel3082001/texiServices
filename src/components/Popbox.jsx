import React from 'react'

function Popbox() {
    return (
        <div className='w-full h-screen bg-gray-300 flex'>
            <div className='w-full flex justify-center items-center'>
                <div className='bg-blue-300'>
                    <div className='flex'>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='name' />
                        </div>
                        <div>
                            <label htmlFor='phone'>Contact Number</label>
                            <input type='number' name='phone' />
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <div>
                            <label htmlFor='pickUp'>pickUp Point</label>
                            <input type='text' name='pickUp' />
                        </div>
                        <div>
                            <label htmlFor='dropOff'>dropOff Point</label>
                            <input type='text' name='dropOff' />
                        </div>
                    </div>
                    <div className='flex mt-5 justify-between items-center'>
                        <div>
                            {/* <label htmlFor='specialOption'>Name</label> */}
                            <input type='checkbox' name='specialOption' className='mx-3'/>disable people
                            <input type='checkbox' name='specialOption' className='mx-3'/>child availability
                        </div>
                        <div>
                            <label htmlFor='paymentMode'>Payment mode</label>
                            <div>

                            <input type='radio' name='paymentMode' />cash
                            <input type='radio' name='paymentMode' />card
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Popbox