"use client"
import React, { useEffect, useState } from 'react'
// import Link from 'next/link';
import { useSelector } from 'react-redux';

const page = () => {
  const [subTotal, setSubTotal] = useState(0)
  // const userCart = useSelector((data) => data.reducer);
  const subTotal1 = useSelector((data) => data.reducer.subTotal);
  useEffect(() => {
    setSubTotal(subTotal1)
  }, []);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-8 mx-auto">
        <div className="lg:w-full justify-center mx-auto flex flex-wrap">
          <div className="lg:w-3/5 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h3 className="bg-green-100 title-font font-medium mb-1">Your order has been successfully placed</h3>
            <h2 className="text-gray-900 text-2xl title-font font-medium mb-4">Order Id: #61874842</h2>
            <div className="flex mb-2">
              <a className="flex-grow text-center py-1 text-lg px-1">Item Description</a>
              <a className="flex-grow text-center py-1 text-lg px-1">Quantity</a>
              <a className="flex-grow text-center py-1 text-lg px-1">Total</a>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Tshirt</span>
              <span className="ml-auto text-gray-900">3</span>
              <span className="ml-auto text-gray-900">₹{subTotal}</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Mug</span>
              <span className="ml-auto text-gray-900">1</span>
              <span className="ml-auto text-gray-900">₹{subTotal}</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">sticker</span>
              <span className="ml-auto text-gray-900">4</span>
              <span className="ml-auto text-gray-900">₹{subTotal}</span>
            </div>
            <div>
              <span className="title-font font-medium text-2xl text-gray-900">Sub Total: ₹{subTotal}</span>
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default page