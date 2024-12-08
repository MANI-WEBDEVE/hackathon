import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from "react-icons/fa6";
import { SiGooglepay } from "react-icons/si";
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <footer className='w-full px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 lg:py-20'>
      <Newsletter />
      
      {/* Logo and Description */}
      <div className='mt-10 sm:mt-16 lg:mt-20'>
        <div className='mb-8'>
          <h2 className='text-2xl sm:text-3xl font-extrabold mb-4'>SHOP.CO</h2>
          <p className='text-gray-600 text-sm mb-6'>
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className='flex gap-4'>
            <a href="#" className='text-black hover:text-gray-600 transition-colors'>
              <FaTwitter size={20} />
            </a>
            <a href="#" className='text-black hover:text-gray-600 transition-colors'>
              <FaFacebookF size={20} />
            </a>
            <a href="#" className='text-black hover:text-gray-600 transition-colors'>
              <FaInstagram size={20} />
            </a>
            <a href="#" className='text-black hover:text-gray-600 transition-colors'>
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Links Section - 2 columns on mobile, 4 columns on desktop */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Company Links */}
          <div>
            <h3 className='font-bold text-sm mb-4'>COMPANY</h3>
            <ul className='space-y-3 text-gray-600 text-sm'>
              <li><a href="#" className='hover:text-black transition-colors'>About</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Features</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Works</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Career</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className='font-bold text-sm mb-4'>HELP</h3>
            <ul className='space-y-3 text-gray-600 text-sm'>
              <li><a href="#" className='hover:text-black transition-colors'>Customer Support</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Delivery Details</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Terms & Conditions</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='font-bold text-sm mb-4'>RESOURCES</h3>
            <ul className='space-y-3 text-gray-600 text-sm'>
              <li><a href="#" className='hover:text-black transition-colors'>Free eBook</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Development Tutorial</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>How to - Blog</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Youtube Playlist</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className='font-bold text-sm mb-4'>FAQ</h3>
            <ul className='space-y-3 text-gray-600 text-sm'>
              <li><a href="#" className='hover:text-black transition-colors'>Account</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Manage Deliveries</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Orders</a></li>
              <li><a href="#" className='hover:text-black transition-colors'>Payments</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-10 sm:mt-16 pt-6 border-t border-gray-200'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-gray-600 text-sm text-center sm:text-left'>
            Shop.co  2000-2023, All Rights Reserved
          </p>
          <div className='flex gap-4 items-center'>
            <FaCcVisa className="w-8 h-5 text-[#1434CB]" />
            <FaCcMastercard className="w-8 h-5 text-[#EB001B]" />
            <FaCcPaypal className="w-8 h-5 text-[#253B80]" />
            <FaCcApplePay className="w-8 h-5 text-black" />
            <SiGooglepay className="w-12 h-5 text-black" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
