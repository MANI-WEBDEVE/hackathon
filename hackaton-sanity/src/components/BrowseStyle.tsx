import React from 'react'
import Image from 'next/image'

const styleCategories = [
    {
        id: 1,
        title: "Casual",
        image: "/image/browse1.png"
    },
    {
        id: 2,
        title: "Formal",
        image: "/image/browse2.png"
    },
    {
        id: 3,
        title: "Party",
        image: "/image/browse3.png"
    },
    {
        id: 4,
        title: "Gym",
        image: "/image/browse4.png"
    }
]

const BrowseStyle = () => {
    return (
        <section className='  w-[90%] rounded-t-[40px] overflow-hidden mx-auto md:m-0 px-14 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 lg:py-20 bg-gray-100 '>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-10'>BROWSE BY DRESS STYLE</h2>
            
            <div className='flex flex-col gap-4 sm:gap-6'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
                   
                    <div className='relative group cursor-pointer overflow-hidden rounded-xl 
                      col-span-1  md:col-span-2 
                        '>
                            <Image
                                src={styleCategories[0].image}
                                alt={styleCategories[0].title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {styleCategories[0].title}
                            </h3>
                        </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-xl 
                        
                        '>
                            <Image
                                src={styleCategories[1].image}
                                alt={styleCategories[1].title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {styleCategories[1].title}
                            </h3>
                        </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-xl 
                        
                        '>
                            <Image
                                src={styleCategories[2].image}
                                alt={styleCategories[2].title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {styleCategories[2].title}
                            </h3>
                        </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-xl 
                       col-span-1  md:col-span-2 
                        '>
                            <Image
                                src={styleCategories[3].image}
                                alt={styleCategories[3].title}
                                width={600}
                                height={300}
                                className='w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors'></div>
                            <h3 className='absolute top-4 sm:top-6 left-4 sm:left-6 text-xl sm:text-2xl font-bold text-white drop-shadow-lg'>
                                {styleCategories[3].title}
                            </h3>
                        </div>
                </div>
                
               
            </div>
           
        </section>
    )
}

export default BrowseStyle

