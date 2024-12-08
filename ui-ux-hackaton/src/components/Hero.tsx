import Image from 'next/image'
import React from 'react'
import ProductLogo from './ProductLogo'
import Arrival from './Arrival'
import TopSelling from './TopSelling'
import localFont from "next/font/local";

const intergral = localFont({
    src: "../app/fonts/integralcf.otf",
    variable: "--font-integral", 
  }); 
  

const Hero = () => {
  return (
    <>
      <section className='bg-[#F2F0F1] w-full grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-28 min-h-screen lg:h-[87vh] relative overflow-hidden'>
        {/* Decorative elements - Hidden on mobile */}
        <div className='hidden md:block absolute top-[51px] right-[9.5rem] z-[99]'>
          <Image src="/image/star.png" alt="decorative star" width={50} height={50} />
        </div>
        <div className='hidden md:block absolute top-44 right-[35rem] z-[99]'>
          <Image src="/image/star.png" alt="decorative star" width={50} height={50} />
        </div>
        <div className='hidden md:block absolute top-40 left-1/3 w-[1px] h-[200px] bg-gray-300/50 transform -rotate-45'></div>
        <div className='hidden md:block absolute bottom-40 right-1/3 w-[1px] h-[200px] bg-gray-300/50 transform -rotate-45'></div>

        <div className='flex flex-col justify-center gap-4 py-8 lg:py-0 text-center lg:text-left'>
            <h1 className={`${intergral.className} text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase`}>
              Find Clothes <br/>that matches <br/>your style
            </h1>
            <p className='text-sm md:text-base lg:text-lg px-4 lg:px-0'>
              Browse through our diverse range of meticulously crafted garments,
              <br className='hidden lg:block'/> designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className='flex flex-row justify-center lg:justify-start gap-4 mt-4'>
              <button className='bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base hover:bg-gray-800 transition-colors'>
                Shop Now
              </button>
            </div>
        </div>
        <div className='flex-1 flex justify-center items-center overflow-hidden'>
          <div className='relative w-full aspect-[4/5] md:aspect-[5/6] lg:aspect-[6/7] max-h-[644px] overflow-hidden'>
            <Image 
              className='object-cover object-[center_35%] rounded-b-[30px]' 
              src={'https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdDO3aGizO-wZt5YOgeQ~J6YYZ5VPfIEMLyM1FQtcOLXbkHRhZoDLkxD3IcS6wcRkTLoITyuV6Q9DHHg8C1jH0dC3riWszZeeI1C6~NdZYOHGHg3TCY6vwZHHtAXr1q6dITGpLqdoLnh7wwk5~HvaXn28Q3o~6fJC1TjLeN6p-vPmqU8uxbxbrLDz8McmAqJlR-rODizOep0o9-hk0wI8tA2F2cKWyawKk51pQpqeCFhT2Vy~LMy8x49dM3OqEdoH7GDwaVjXNHNDUISgTHqR5R3aGk7UvDOC2~EgVEiesdJCpR4jmdbZ~YrQQZ9Vxe~-Av7tVaozmJ0GLt15v4uUg__'} 
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 768px) 80vw,
                     (max-width: 1024px) 70vw,
                     50vw"
              priority
              quality={100}
              alt='hero'
            />
          </div>
        </div>
      </section>
      <section >
        <ProductLogo/>
        <Arrival/>
        <TopSelling/>
      </section>
    </>
  )
}

export default Hero
