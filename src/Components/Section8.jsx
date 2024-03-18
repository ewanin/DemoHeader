import React from 'react'

import Loop from '../../public/Images/Loop.png'
import arrow from '../../public/Images/arrow.svg'

const Section8 = () => {
    return (
        <div className='py-[4%]'>
            <img src={Loop} alt="Not Available" className=' py-4 border-b-2 border-t-2 border-primary' />
            <div className="border-2 rounded-full p-5 w-[70px] h-[70px] border-primary flex justify-center items-center mx-auto mt-[5%] cursor-pointer">
                <img src={arrow} alt="Not Available" className='w-[20px] h-[20px]' />
            </div>
            <div className='text-[16px] font-semibold text-center mt-[3%]'>© 2024 Loket Design Inc. All Rights Reserved.</div>
        </div>
    )
}

export default Section8