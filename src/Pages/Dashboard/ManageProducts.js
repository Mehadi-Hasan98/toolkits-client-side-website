import React, { useState } from 'react';
import useManageProducts from '../../hooks/useManageProducts';
import ProductShow from '../ProductShow/ProductShow';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [products] = useManageProducts();
    const [loading, setLoading] = useState(true);
    if(!loading){
      <Loading></Loading>
    }
    else{
      setLoading(false);
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-mono mt-10 font-bold text-emerald-600'>All Products</h2>
            <div className='grid grid-cols-2'>
                {
                    products.map(product => <ProductShow
                    key={product._id}
                    product={product}
                    ></ProductShow>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;