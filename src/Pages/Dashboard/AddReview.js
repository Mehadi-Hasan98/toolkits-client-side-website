import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmitFrom = data => {
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        .then(res=> res.json())
        .then(result => 
          console.log(result))
          toast("Review added successfully");
          reset();
    }
    return (
        <div className="text-center font-mono mt-20 mb-10 h-full">
        <h2 className="text-4xl font-semibold ">
          Add Your <span className="text-primary">Reviews</span>
        </h2>
        <form
          className="flex flex-col w-80 mx-auto mt-20 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="User Photo URL"
            type="text"
            {...register("img")}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10"
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Description"
            type="text"
            {...register("description", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Address"
            type="text"
            {...register("address", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Rating"
            type="text"
            {...register("rating", { required: true })}
          />
          <input
            className="product-btn rounded bg-primary py-4 mb-16 text-white text-xl"
            type="Submit"
            value="Post Review"
          />
        </form>
      </div>
    );
};

export default AddReview;