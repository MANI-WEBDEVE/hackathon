import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";

const Newsletter = () => {
  return (
    <section className='w-full bg-black px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-12 lg:py-16 rounded-2xl sm:rounded-[2rem] mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white text-center lg:text-left max-w-md'>
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className='flex gap-4 flex-col items-center justify-center w-full lg:w-auto'>
                <div className='relative w-full sm:w-[400px]'>
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className='w-full py-3 sm:py-4 px-12 rounded-full text-sm sm:text-base text-black focus:outline-none focus:ring-2 focus:ring-white/20'
                    />
                    <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
                        <MdOutlineMailOutline className='w-5 h-5 sm:w-6 sm:h-6' />
                    </span>
                </div>
                <button className='w-full sm:w-[400px] bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-gray-100 active:bg-gray-200 transition-colors'>
                    Subscribe to Newsletter
                </button>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
