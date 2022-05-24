import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmitFrom = data => {

    }
    return (
        <div className="text-center font-mono mt-20 mb-10 h-full">
        <h2 className="text-4xl font-semibold ">
          Add Your <span className="text-primary">Comments</span>
        </h2>
        <form
          className="flex flex-col w-80 mx-auto mt-20 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="User Photo"
            type="text"
            {...register("img")}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="name"
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10"
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="description"
            type="text"
            {...register("description", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="address"
            type="text"
            {...register("address", { required: true })}
          />
          <input
            className="product-btn rounded bg-primary py-4 text-white text-xl"
            type="Submit"
            value="Post Review"
          />
        </form>
      </div>
    );
};

export default AddReview;