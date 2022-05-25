import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";

const Purchase = () => {
//   const [user] = useAuthState();

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  useEffect( () => {
      fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [id])

  return (
    <div className="md:px-28 mb-20 mt-16">
        <h2 className="text-2xl text-center font-mono mb-10 font-semibold text-emerald-600">Product Details</h2>
      <div style={{ height: "600px" }} className="card w-80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            style={{ height: "200px" }}
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
          <div className="card-actions">
            <button className="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

