
import React from 'react'
import ArraivalList from './ArraivalList';
const Arrival = () => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center py-16 gap-10 px-20'>
        <div>
          <h2 className='text-4xl font-extrabold uppercase text-center'>New Arrivals</h2>
        </div>
        <div className='flex flex-row justify-center items-center gap-10 w-full flex-wrap mt-10'>
          <ArraivalList/>
        </div>
        <div className='flex items-center justify-center rounded-full px-10 py-3 border-[1px] border-gray-700/10'>
        <p>view all</p>
      </div>
      </section>
    </>
  )
}

export default Arrival
