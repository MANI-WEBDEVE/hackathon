import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const reviews = [
    {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        verified: true,
        review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        id: 2,
        name: "Alex K.",
        rating: 5,
        verified: true,
        review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of taste and occasions."
    },
    {
        id: 3,
        name: "James L.",
        rating: 5,
        verified: true,
        review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
]

const HappyCustomers = () => {
    return (
        <section className='w-full px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 lg:py-20'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 mb-8 lg:mb-10'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center sm:text-left'>
                    OUR HAPPY CUSTOMERS
                </h2>
                <div className='flex gap-3 sm:gap-4'>
                    <button className='p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors active:scale-95'>
                        <IoIosArrowBack size={20} className={`sm:`} />
                    </button>
                    <button className='p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors active:scale-95'>
                        <IoIosArrowForward size={20} className={`sm:`} />
                    </button>
                </div>
            </div>

            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
                {reviews.map((review) => (
                    <div key={review.id} className='p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors'>
                        <div className='flex gap-1 text-yellow-400 mb-3 sm:mb-4'>
                            {[...Array(review.rating)].map((_, index) => (
                                <FaStar key={index} className='w-4 h-4 sm:w-5 sm:h-5' />
                            ))}
                        </div>
                        <div className='flex items-center gap-2 mb-3 sm:mb-4'>
                            <h3 className='font-semibold text-base sm:text-lg'>{review.name}</h3>
                            {review.verified && (
                                <span className='text-green-500 text-xs sm:text-sm flex items-center gap-1'>
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                                    </svg>
                                    Verified
                                </span>
                            )}
                        </div>
                        <p className='text-gray-600 text-sm sm:text-base line-clamp-4'>{review.review}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HappyCustomers
