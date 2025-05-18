import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../Data/Products.js';
import { useCart } from './CartContext';
import '../App.css'

const Product = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const {dispatch}=useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => String(p.id) === String(id));
    setProduct(found || null);
  }, [id]);

  if (!product) {
    return <div className="text-center text-gray-500 mt-10">Loading or Product Not Found</div>;
  }

  const handleAddToCart = () => {
    dispatch({type:'ADD_ITEM',payload:product})
    
   
  };

  return (
    <div className="max-w-4xl mt-20  mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">{product.title}</h3>
          <p className="text-gray-600 mb-2">Category: {product.category}</p>
          <p className="text-gray-800 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">${product.price}</p>
          <p className=' my-2'>rating : {product.rating.rate}</p>
          <p className='my-1'>Available : {product.rating.count}</p>
          <button
            onClick={()=>handleAddToCart(product)}
            className="px-6 py-3 border bg-blue-600 text-black font-medium rounded-xl  hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
