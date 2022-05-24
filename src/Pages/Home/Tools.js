import React, { useEffect, useState } from 'react';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <>
        <h2 className='text-3xl font-mono text-center'>Our Tools</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-28'>
            {
                products.map(product => <div
                key={product.id}
                >
                    <div style={{height: "600px"}} class="card w-80 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img style={{height: "200px"}} src={product.img} alt="tools" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center font-mono">
    <h2 class="card-title">{product.name}</h2>
    <h6>Price: ${product.price}</h6>
    <h6>Stock: {product.stock}</h6>
    <h6>Min Order: {product.order}</h6>
    <p>{product.description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Purchase</button>
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