import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    const [products, setProducts] = useState([]);
    const reverse = [...products].reverse();
    const navigate = useNavigate();
    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }

    return (
        <>
        <h2 className='text-3xl font-bold font-mono text-center text-blue-700'>Our Tools</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-28'>
            {
                reverse.slice(0, 6).map(product => <div
                key={product.id}
                >
                    <div style={{height: "600px"}} class="card w-80 bg-base-100 mt-10 shadow-xl">
  <figure class="px-10 pt-10">
    <img style={{height: "200px"}} src={product.img} alt="tools" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center font-mono">
    <h2 class="card-title">{product.name}</h2>
    <h6>Price: ${product.price}</h6>
    <h6>Stock: {product.stock}</h6>
    <h6>Min Order: {product.order}</h6>
    <p>Description: {product.description}</p>
    <div class="card-actions">
      <button class="btn btn-primary" onClick={ () => handlePurchase(product._id)}>Purchase</button>
    </div>
  </div>
</div>
                </div>)
            }
        </div>
        </>
    );
};

export default Tools;