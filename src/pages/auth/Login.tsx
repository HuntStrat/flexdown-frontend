import React from 'react';
import Image from '../../assets/images/signup.jpg';

const Login: React.FC = () => {
  return (
    <div className="h-screen w-full p-8 md:flex justify-between items-center font-lexend">
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-around">
        <div className="p-4 h-[90vh] md:w-[80%] flex flex-col justify-around">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <span className="text-center">Enter your email and password to login.</span>
          
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">Your Email</label>
              <input
                id="email"
                className="w-full md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500"
                aria-label="Your Email"
                type="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2" htmlFor="password">Password</label>
              <input
                id="password"
                className="w-full md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500"
                aria-label="Password"
                type="password"
                required
              />
            </div>

            <div className="mb-4">
              <input className='mr-2' type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree with the <a className="underline decoration-purple" href="">Terms and Conditions</a>
              </label>
            </div>

            <div className="h-[30vh] flex flex-col justify-between">
              <button type="submit" className="rounded-lg bg-black font-lexend text-white p-4 md:px-16 drop-shadow-xl">
                Login
              </button>

              <div className="flex justify-between mt-8">
                <span>
                  <input className="size-checkbox" type="checkbox" id="subscribe" />
                  <label htmlFor="subscribe"> Subscribe me for newsletters </label>
                </span>

                <a href="/forgot-password" className="underline">Forgot Password</a>
              </div>

              <div className="text-center">
                <a className="text-purple" href="/signup">
                  Not registered? <span className="text-black">Create account</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden w-0 md:block md:w-1/2">
        <div className="p-4 bg-white ">
          <img src={Image} alt="Login" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
