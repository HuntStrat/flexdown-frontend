import React from 'react';
import Image from '../../assets/images/login.jpg';

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full p-8 md:flex justify-between items-center font-lexend">

<div className="hidden w-0 md:block md:w-1/2">
        <div className="p-4 bg-white ">
          <img src={Image} alt="Login" className="w-full h-auto rounded-lg" />
        </div>
      </div>


      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-around">
        <div className="p-4 h-[80vh] md:w-[80%] flex flex-col justify-around">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <span className="text-center">Enter your email and password to Login.</span>
          <div>
            <span>Your Email</span>
            <input
              className="w-[90%] md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500"
              aria-label="Your Email"
              type="text"
            />
          </div>

          <div>
            <span>Password</span>
            <input
              className="w-[90%] md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500"
              aria-label="Password"
              type="text"
            />
          </div>

          <span>
            <input type="checkbox" /> I agree with the{' '}
            <a className="underline decoration-purple" href="">
              Terms and Conditions
            </a>
          </span>

          <div className="flex flex-col">
            <button className="rounded-lg bg-black font-lexend text-white p-4 md:px-16 drop-shadow-xl md:mb-16">
              Sign Up
            </button>

            <div className="flex justify-between mt-8">
              <span>
                <input className="size-checkbox" type="checkbox" /> Subscribe me
                for newsletters{' '}
              </span>

              <span>Forgot Password</span>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Login;
