
import React from 'react';
import Image from '../../assets/images/signup.jpg'

const SignUp: React.FC = () => {
  return (
    <div className='h-screen p-8 flex justify-between items-center font-lexend'>

<div className='w-1/2 h-full flex flex-col items-center justify-around'>
<div className='p-4 h-[80vh] flex flex-col justify-around'>
<h1 className='6xl font-bold text-center'>Sign Up</h1>
<span>Enter your email and password to Sign Up</span>
<div>
<span>Your Email</span>
<input className='w-[90%] md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500' aria-label='Your Email' type="text" />
</div>

<div>
<span>Password</span>
<input className='w-[90%] md:w-[100%] p-2 border-2 rounded-md focus:border-purple-500' aria-label='Password' type="text" />
</div>

<span>I agree with the Terms and Contitions</span>

<div className='flex flex-col'>
<button className='rounded-lg bg-black font-lexend text-white p-4 md:px-16 drop-shadow-xl md:mb-16'>Sign Up</button>
<span>Subscribe me for newslatters</span>
<span>Forgot Password</span>
</div>
</div>




</div>

<div className='w-1/2'>
  <img src={Image} alt="" />
</div>

    </div>
  );
};

export default SignUp;