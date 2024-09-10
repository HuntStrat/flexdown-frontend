import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Slider } from '@/components/Slider'; 

type UserData = {
  surname: string;
  first_name: string;
  email: string;
  address: string;
  password: string;
  confirm_password: string;
  city: string;
  mobile_number: string;
  whatsapp_number: string;
  bio?: string;
};

const UserForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();
  const [step, setStep] = useState(1);

  const onSubmit = (data: UserData) => {
    console.log('Form Submitted:', data);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='w-full flex items-center justify-center mt-16'>


    <div className="w-[80%] bg-white shadow-md">
      <div className="w-full p-4 h-auto flex flex-col bg-gray rounded-md">
     <div className='w-full flex justify-between font-lexend'>

    
        <button
          className={`rounded-full w-16 h-8 ${step >= 1 ? 'bg-blue-500' : 'bg-gray-200'}`}
          disabled={step < 1}
        >
          About
        </button>
        <button
          className={`rounded-full w-16 h-8 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-200'}`}
          disabled={step < 2}
        >
          Adress
        </button>
        <button
          className={`rounded-full w-16 h-8 ${step >= 3 ? 'bg-blue-500' : 'bg-gray-200'}`}
          disabled={step < 3}
        >
          Social
        </button>
        <button
          className={`rounded-full w-16 h-8 ${step >= 4 ? 'bg-blue-500' : 'bg-gray-200'}`}
          disabled={step < 4}
        >
          Profile
        </button>
        </div>


        <div className="mb-4">
          <Slider currentStep={step} totalSteps={4} />
        </div>


      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div>
            <h2 className="text-xl mb-4">About Me</h2>
            <div className="mb-4">
              <label>First Name:</label>
              <input
                {...register('first_name', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.first_name && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>Last Name:</label>
              <input
                {...register('surname', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.surname && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>Company:</label>
              <input
                {...register('bio')}
                className="border border-gray-300 p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label>Email:</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.email && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>Password:</label>
              <input
                type="password"
                {...register('password', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.password && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>Confirm Password:</label>
              <input
                type="password"
                {...register('confirm_password', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.confirm_password && <p className="text-red-500">This field is required</p>}
            </div>

            <button
              type="button"
              onClick={nextStep}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl mb-4">Address</h2>
            <div className="mb-4">
              <label>Address:</label>
              <input
                {...register('address', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.address && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>City:</label>
              <input
                {...register('city', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.city && <p className="text-red-500">This field is required</p>}
            </div>

            <button
              type="button"
              onClick={prevStep}
              className="bg-black text-white px-4 py-2 rounded mr-2"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-xl mb-4">Social</h2>
            <div className="mb-4">
              <label>Mobile Number:</label>
              <input
                {...register('mobile_number', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.mobile_number && <p className="text-red-500">This field is required</p>}
            </div>

            <div className="mb-4">
              <label>WhatsApp Number:</label>
              <input
                {...register('whatsapp_number', { required: true })}
                className="border border-gray-300 p-2 w-full"
              />
              {errors.whatsapp_number && <p className="text-red-500">This field is required</p>}
            </div>

            <button
              type="button"
              onClick={prevStep}
              className="bg-black text-white px-4 py-2 rounded mr-2"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-xl mb-4">Profile</h2>
            <div className="mb-4">
              <label>Bio:</label>
              <textarea
                {...register('bio')}
                className="border border-gray-300 p-2 w-full"
              />
            </div>

            <button
              type="button"
              onClick={prevStep}
              className="bg-black text-white px-4 py-2 rounded mr-2"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>

    </div>
  );
};

export default UserForm;
