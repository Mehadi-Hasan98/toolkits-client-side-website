import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmitFrom = data => {

    }

    return (
        <div>
            <h2 className='text-2xl font-mono font-bold text-center text-emerald-600 mt-16'>Add Products</h2>
            <form
          className="flex flex-col w-80 mx-auto mt-12 mb-12 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Photo URL"
            type="text"
            {...register("img")}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10"
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Price" type="number"
            {...register("quantity", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Product Stock" type="number"
            {...register("quantity", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Enter Minimum Order" type="number"
            {...register("quantity", { required: true })}
          />
          {/* <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="description"
            type="text"
            {...register("description", { required: true })}
          /> */}
          <textarea className='w-80 rounded border-2 border-primary  mb-5 py-4 px-10' placeholder='Description' type="text" {...register("description", {required: true})} />
          <input
            className="product-btn rounded bg-primary py-4 text-white text-xl"
            type="Submit"
            value="Add Products"
          />
        </form>
        </div>
    );
};

export default AddProducts;