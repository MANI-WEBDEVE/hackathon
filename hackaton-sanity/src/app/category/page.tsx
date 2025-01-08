import {CategoryProduct} from '@/components/CategoryProduct'
import {FilterSidebar} from '@/components/FilterSidebar'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const page = () => {
  return (
    <>
    <div className="flex items-center gap-2 px-4 md:px-8 lg:px-16 py-4 text-sm">
        <span className="text-gray-500">Home</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span className="text-gray-500">Shop</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span className="text-gray-500">Men</span>
        <MdKeyboardArrowRight className="text-gray-500" />
        <span>T-shirts</span>
      </div>
       <div className="flex flex-col md:flex-row gap-6 p-4">
       
      <FilterSidebar />
      <CategoryProduct />
    </div>
    </>
  )
}

export default page
