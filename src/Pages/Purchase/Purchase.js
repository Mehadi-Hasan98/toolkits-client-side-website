import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

  const onSubmitFrom = data => {
    const url = `https://blooming-stream-16978.herokuapp.com/order`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    .then(res=> res.json())
    .then(result => {
        console.log(result)
        toast("Order added successfully");
    })
      
    reset();
}


  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect( () => {
      fetch(`https://blooming-stream-16978.herokuapp.com/product/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [id])

  return (
      
    <div className="md:px-28 mb-20 mt-16 font-mono">
        <div>
       <h2 className="text-2xl text-center mb-10 font-semibold text-emerald-600">Product Details</h2>
       </div>
        <div className="flex flex-row">
       
      <div style={{ height: "600px" }} className="card ml-10 mr-48 w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            style={{ height: "150px" }}
            src={products.img}
            alt="tools"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center font-mono">
          <h2 className="card-title">{products.name}</h2>
          <h6>Price: ${products.price}</h6>
          <h6>Stock: {products.stock}</h6>
          <h6>Min Order: {products.order}</h6>
          <p>{products.description}</p>
          <input className="w-72 rounded border-2 border-primary  mb-5 py-4 px-10" type="number" name="Minimum Quantity" placeholder="Enter Update Quantity"/>
          <div className="flex">
          <button className="btn btn-sm border-emerald-400 text-emerald-600 bg-transparent mr-3">Increase</button>
          <button className="btn btn-sm border-red-400 text-red-600 bg-transparent">Decrease</button>
          </div>
        </div>
      </div>
      <div>
      <form
          className="flex flex-col w-48 mt-20 form"
          onSubmit={handleSubmit(onSubmitFrom)}
        >
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Name"
            value={user.displayName}
            {...register("name", { required: true })}
          />
          <input
            className="w-80 rounded  border-2 border-primary  mb-5 py-4 px-10" readOnly
            value={user.email}
            {...register("email", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Product Name"
            value={products.name}
            {...register("productName", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-solid border-primary  mb-5 py-4 px-10"
            placeholder="Your Address"
            type="text"
            {...register("address", { required: true })}
          />
          <input
            className="w-80 rounded border-2 border-primary  mb-5 py-4 px-10"
            placeholder="Phone Number"
            type="number"
            {...register("phone number", { required: true })}
          />
          <input
            className="product-btn btn-lg rounded bg-primary py-4 mb-16 text-white text-lg"
            type="Submit"
            value="CONFIRM ORDER"
          />
        </form>
      </div>
    </div>
    </div>
  );
};

export default Purchase;

