import React from 'react';
import Image from '../../assets/images/signup.jpg';

const SignUp: React.FC = () => {
  return (
    <div className='h-screen p-8 flex justify-between items-center font-lexend'>
      <div className='w-full md:w-1/2 h-full flex flex-col items-center justify-around'>
        <div className='p-4 h-[80vh] md:w-[80%] flex flex-col justify-around'>
          <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
          <span className='text-center'>Enter your email and password to register.</span>
          
          <form>
            <div className='mb-4'>
              <label className='block mb-2' htmlFor='email'>Your Email</label>
              <input
                id='email'
                className='w-[90%] md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500'
                aria-label='Your Email'
                type='email'
                required
              />
            </div>

            <div className='mb-4'>
              <input type='checkbox' id='terms' required />
              <label htmlFor='terms'>
                I agree with the <a className='underline decoration-purple' href=''>Terms and Conditions</a>
              </label>
            </div>

            <div className='flex flex-col'>
              <button type='submit' className='rounded-lg bg-black font-lexend text-white p-4 md:px-16 drop-shadow-xl md:mb-16'>
                REGISTER NOW
              </button>

              <div className='mt-8 text-center'>
                <a href='/login'>Already have an account? <span className='underline'>Login</span></a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='hidden w-0 md:block md:w-1/2'>
        <div className='p-4 bg-white'>
          <img src={Image} alt='Sign Up' className='w-full h-auto rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
