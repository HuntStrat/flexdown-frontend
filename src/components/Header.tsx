import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
import { IoMail } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from 'react-icons/si';

const Header: React.FC = () => {
  return (
    <header className="w-full p-2 bg-white text-gray flex justify-around items-center border-b-2 border-gray-700">
      <div className="w-30% flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white-500 rounded-full p-2 bg-facebook">
          <FaFacebookF fill='white' />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 rounded-full p-2 bg-instagram">
          <FaInstagram fill='white' />
        </a>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 rounded-full p-2 bg-mail">
          <SiGmail fill='white' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 rounded-full p-2 bg-linkedin">
          <FaLinkedinIn fill='white' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 rounded-full p-2 bg-black">
          <FaSquareXTwitter fill='white' />
        </a>
      </div>
      <div className="w-80% flex space-x-4 justify-between">
  <ul className="flex space-x-4 w-full">
    <li className="p-2 text-sm w-40%">
      <a href="" className="flex items-center space-x-2">
        <FaPhoneAlt />
        <span>+ 389 756 851 123</span>
      </a>
      <p className='text-grayy font-semibold'>Call us today</p>
    </li>
    <li className="p-2 text-sm">
      <a href="" className="flex items-center space-x-2">
        <IoMail />
        <span>example@gmail.com</span>
      </a>
      <p className='text-grayy font-semibold'>Email us at</p>
    </li>
    <li className="p-2 text-sm">
      <a href="" className="flex items-center space-x-2">
        <FaRegClock />
        <span>9am - 10pm</span>
      </a>
      <p className='text-grayy font-semibold'>Open everyday</p>
    </li>
  </ul>
      </div>
    </header>
  );
};

export default Header;