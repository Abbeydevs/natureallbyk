"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div
      className="w-max absolute p-4 rounded-md shadow-lg bg-white 
        top-12 right-0 flex flex-col gap-6 z-20"
    >
      {!cartItems ? (
        <div>No items in the cart.</div>
      ) : (
        <>
          <h2 className="font-bold text-lg">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
                height={70}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between gap-2 w-full">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-bold">Product Name</h3>
                    <div className="p-1 bg-gray-100 rounded-md">$59</div>
                  </div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>

                {/* bottom */}
                <div className="flex justify-between items-center text-sm gap-8">
                  <span className="text-gray-400">Qty. 2</span>
                  <span className="text-blue-400">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                width={70}
                height={70}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between gap-2 w-full">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex justify-between items-center gap-8">
                    <h3 className="font-bold">Product Name</h3>
                    <div className="p-1 bg-gray-100 rounded-md">$59</div>
                  </div>
                  <div className="text-sm text-gray-400">Available</div>
                </div>

                {/* bottom */}
                <div className="flex justify-between items-center text-sm gap-8">
                  <span className="text-gray-400">Qty. 2</span>
                  <span className="text-blue-400">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center font-semibold">
              <span>Subtolal</span>
              <span>$59</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between items-center gap-4">
              <button className="rounded-md py-2 px-4 ring-1 ring-gray-400">
                View Cart
              </button>
              <button className="rounded-md py-2 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
