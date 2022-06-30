import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    const [products, setProducts] = useState([]);
    const reverse = [...products].reverse();
    const navigate = useNavigate();
    useEffect( () => {
        fetch('https://blooming-stream-16978.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handlePurchase = (id) => {
        navigate(`/purchase/${id}`);
    }

    return (
        <>
        <h2 className='text-3xl font-bold font-mono text-center text-white'>Our Tools</h2>
        <div className='grid mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-28'>
            {
                reverse.slice(0, 6).map(product => <div
                key={product.id}
                >
                    <div style={{height: "600px"}} className="card w-9/12 bg-base-100 mt-10 mx-auto shadow-xl">
  <figure className="px-10 pt-10">
    <img style={{height: "200px"}} src={product.img} alt="tools" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center font-mono">
    <h2 className="card-title">{product.name}</h2>
    <h6>Price: ${product.price}</h6>
    <h6>Stock: {product.stock}</h6>
    <h6>Min Order: {product.order}</h6>
    <p>Description: {product.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={ () => handlePurchase(product._id)}>Purchase</button>
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