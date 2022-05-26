import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-2xl font-semibold text-emerald-600 text-center text-semiBold font-mono mt-10'>My Profile</h2>
            <h1 className='text-xl text-center mt-10'>Name: <span className='text-cyan-700'>{user.displayName}</span></h1>
            <h2 className='text-xl text-center mt-6'>Email: <span className='text-teal-600'>{user.email}</span></h2>

            <form
          className="flex flex-col w-80 mx-auto mt-10 form"
        //   onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Education"
            type="text"
            {...register("education", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Location"
            type="text"
            {...register("location", { required: true })}
          />
         <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Phone Number"
            type="number"
            {...register("phone number", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="LinkedIn Profile Link"
            type="text"
            {...register("link")}
          />
          <input
            className="product-btn rounded bg-primary py-4 mb-16 text-white text-xl"
            type="Submit"
            value="Add Information"
          />
        </form>
        </div>
    );
};

export default MyProfile;