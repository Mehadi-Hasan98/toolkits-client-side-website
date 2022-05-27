import React, { useEffect, useState } from 'react';

const useManageProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect( () =>{
        fetch('https://blooming-stream-16978.herokuapp.com/product')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return [products]
};

export default useManageProducts;