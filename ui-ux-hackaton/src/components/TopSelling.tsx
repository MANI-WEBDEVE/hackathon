import Image from 'next/image'
import React from 'react'
import { FaRegStar } from "react-icons/fa";
import ArraivalList from './ArraivalList';
const TopSelling = () => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center py-16 gap-10 border-b mb-10 px-20'>
        <div>
          <h2 className='text-4xl font-extrabold uppercase text-center'>New TopSellings</h2>
        </div>
        <div className='flex flex-row justify-center items-center gap-10 mx-auto flex-wrap w-full mt-10 '>
          <ArraivalList/>
        </div>
        <div className='flex items-center justify-center rounded-full px-10 py-3 border-[1px] border-gray-700/10'>
        <p>view all</p>
      </div>
      </section>
    </>
  )
}

export default TopSelling
