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
    <div>
      <div style={{ height: "600px" }} class="card w-80 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            style={{ height: "200px" }}
            src={products.img}
            alt="tools"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center font-mono">
          <h2 class="card-title">{products.name}</h2>
          <h6>Price: ${products.price}</h6>
          <h6>Stock: {products.stock}</h6>
          <h6>Min Order: {products.order}</h6>
          <p>{products.description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

