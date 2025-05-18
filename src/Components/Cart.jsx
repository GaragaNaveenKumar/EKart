import React from 'react';
import {useCart} from './CartContext.jsx'
import '../App.css'


const Cart = () => {
  const {state,dispatch}=useCart();
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const total = state.cartItems.reduce((sum, item) => sum + item.price * (item.quantity ||1), 0);

  return (
    <div className="max-w-6xl mt-10 mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left: Cart Items */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">
          Cart ({state.cartItems.length} items)
        </h2>

        {state.cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {state.cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity ||1}</p>
                  <p className="text-sm text-green-500 font-semibold">
                    ${(item.price * (item.quantity ||1)).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-1 border-gray-500 bg-red-50 text-black rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="text-right mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-600 text-black rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right: Summary & Buy */}
      <div className="sticky top-4 h-fit p-4 border rounded-lg shadow-sm bg-white">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <p className="mb-2">Total Items: {state.cartItems.length}</p>
        <p className="mb-4 text-lg text-green-500 font-bold">Total: ${total.toFixed(2)}</p>

        <button
          disabled={state.cartItems.length === 0}
          className="w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 disabled:bg-gray-300"
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default Cart
