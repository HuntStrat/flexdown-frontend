import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const NotFoundPage: React.FC = () => {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationCircle className='text-[#6d43ce] text-5xl mb-4'/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-[#e6dcdc] bg-purple hover:bg-[#7951d6] rounded-md px-3 py-2 mt-4"
        >Go Back
        </Link>
    </section>
    </>
  )
}

export default NotFoundPage