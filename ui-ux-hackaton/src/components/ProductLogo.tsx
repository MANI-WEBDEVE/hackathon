import Image from 'next/image'
import React from 'react'

const ProductLogo = () => {
  return (
    <>
      <section className='flex flex-wrap items-center justify-center py-6 md:py-8 lg:py-10 bg-black gap-6 sm:gap-10 md:gap-16 lg:gap-28 px-4 sm:px-8'>
        <div className='w-24 sm:w-28 md:w-32 lg:w-auto'>
          <Image 
            src={'/image/cal.png'} 
            height={150} 
            width={150} 
            alt={'calvin'}
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='w-20 sm:w-24 md:w-28 lg:w-auto'>
          <Image 
            src={'/image/zara.png'} 
            height={100} 
            width={100} 
            alt={'zara'}
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='w-24 sm:w-28 md:w-32 lg:w-auto'>
          <Image 
            src={'/image/ver.png'} 
            height={150} 
            width={150} 
            alt={'verona'}
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='w-24 sm:w-28 md:w-32 lg:w-auto'>
          <Image 
            src={'/image/para.png'} 
            height={150} 
            width={150} 
            alt={'prada'}
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='w-24 sm:w-28 md:w-32 lg:w-auto'>
          <Image 
            src={'/image/gucci.png'} 
            height={150} 
            width={150} 
            alt={'gucci'}
            className='w-full h-auto object-contain'
          />
        </div>
      </section>
    </>
  )
}

export default ProductLogo
