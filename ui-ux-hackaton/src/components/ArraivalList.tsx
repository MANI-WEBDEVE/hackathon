import React from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from 'next/image'

const arrivalData = [
  {
    id: 1,
    image: 'https://s3-alpha-sig.figma.com/img/15e6/8c10/3095df99e905b164718348af952a0f64?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T1SPPj5Gl6XufUX6ndp-IXbtvT-h~9o2Rp~48If3vrL918Y2bgHIxWgwNixXSKwa-1m-AxfB~~O-B00Bdj~OGDjUZXX1N2lg64ne4m3sQRhm1A8M7XxCZyHpMngsNYgqM29CBxwewbJRbS4Ld0pskjDfDXzQ9Wqt94mhIP3f3hMLfe5nvwZLy0it51WCS9BozJV29oVqsOgHbS9kFI~2K70RpmgxGycfmQcoJZkBtNLMIGtDVngnltdAaPFBoRQ4vjmcFoFXZkU~e5jjYiVBEzMx8FyQ3yvNIajFsKo8Jdd02Zn5SIPe2vDHcoWcS10CjePniSNLA8B9s5qcfSI5Gg__',
    title: 'T-Shirt With Tape Details',
    rating: 5,
    price: 50,
    oldPrice: 60,
    discount: 20
  },
  {
    id: 2,
    image: 'https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N467qjnuMQRS0d40H4Z16YEYUnYViWhyD~kzMCwXPxGhASArDiFwcVKZ6fx6qHXXOBr~BgM6aACxrTv9JJf4JtqrTHE2u716LdWwFLvhCw5eHO-Ivuxzpr2R1u8FWudlQapRQyM6dhrlsIR-R-t2fm-lS4lLdeJq9-QbhHzAQbFFQBUg6NB74gMOgCD6SmICBSUKe5W10WKqEmh1LYV55nX2~7SEsdxZuq-cp7Mn8OrU9NvS493XG3nYQIzM63XxD5ciHEOd8O-zCdTAm0-x0ZIF8ySlZKUOR8oHGsOvSwmugAImS4ejq7K2aVYgOsZ2OUUfghWMWliQU6wtv3mmjQ__',
    title: 'Skinny Fit Jeans',
    rating: 4,
    price: 45,
    oldPrice: 55,
    discount: 15
  },
  {
    id: 3,
    image: 'https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GnB39R0poDoKWZVk7khTTTmcfh5KU-cvHy2m~8vJJhQFe6ExdCS-E70jqpei5gUbnr5nF9r2LTQ~09rrJsvnc4hbQztpuXBRvAMSxTmaDs~wB9EmwmTorwsWKBEMLHByHOcpL7mtAIxtXGltw5a1IlZfiHNzYcXE8azIvDc0WPCiwSa5H0Qgd3KFSHL9E65QbQG9uReF9mC1Fp5ZMsC8h~2f3bNgm4YiE6Z3MHMFgQyJqsgT1ulE4ldMv2CTwjXP9f5paEg2SgC55wX0xdJClZLS5s1PnKkyW7jot0U1TMd5J1g5T5CMv8Cxq17p1HfZB19f06~rwrhW4393RyMIWQ__',
    title: 'Checkered Shirt',
    rating: 5,
    price: 55,
    oldPrice: 65,
    discount: 25
  },
  {
    id: 4,
    image: 'https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9Wr9HtnDWeGaQudQyHB7mjjfkAjuWvJdTPQCyNh6Kh1LyyV5tWyN0~FvrnNZibnzhwc1IWNi6EI2xgnnmq-v6eRRzUV3ScZuYzcPEyaYuIuEsv4cMbhPLn9wYu5lxDOtuWZkUNo3hcO4VDOCEoa8UIF6WXdINnCH9XPlwi5IlBtTrmYGeMcokvZAGJ93nEjS7cUctEf-9vyT8POmrUEKnC-2HDS25dcFlfKowt80D5Mi338FrcXxmAtyi9Ut7Pmm9sKQNgGhOV~LcENR0TvCEE--wLSGQ6BiO6k4h3i9WQOjjKwKEskEXE6J~PINniTbldzmUZp25H0iC9ud6Lp7A__',
    title: 'Sleeve Striped T-shirt',
    rating: 4,
    price: 40,
    oldPrice: 50,
    discount: 30
  }
];

const ArraivalList = () => {
  return (
    <div className='w-full'>
      <div className='flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory'>
        {arrivalData.map((item) => (
          <div key={item.id} className='flex-shrink-0 w-[280px] sm:w-full flex flex-col justify-center items-center rounded-xl bg-gray-50/50 p-3 hover:shadow-md transition-all duration-300 snap-start'>
            <div className='w-full flex justify-center mb-3'>
              <Image 
                src={item.image} 
                alt={item.title} 
                width={200}  
                height={200} 
                className='object-cover h-[200px] w-full max-w-[200px] rounded-lg'
              />
            </div>
            <div className='w-full text-center'>
              <p className='text-base sm:text-lg font-semibold line-clamp-2 min-h-[50px] flex items-center justify-center'>{item.title}</p>
              <div className='flex justify-center items-center gap-2 text-yellow-600 mt-2'>
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={`w-4 h-4 ${index < item.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                ))}
                <p className='text-black text-sm ml-1'>{item.rating}/5</p>
              </div>
              <div className='flex justify-center items-center gap-3 mt-2'>
                <p className='text-lg font-bold text-black'>${item.price}</p>
                <p className='text-base font-medium text-gray-500 line-through'>${item.oldPrice}</p>
                <p className='bg-red-400/30 uppercase text-red-400 px-2 rounded-full text-xs py-1'>
                  -{item.discount}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArraivalList
