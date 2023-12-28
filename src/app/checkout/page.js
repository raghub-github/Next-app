"use client"
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { removeFormCart, increment, decrement } from '../redux/slice';
import { MdDelete } from "react-icons/md";


const page = () => {
  const userCart = useSelector((data) => data.reducer);
  const subTotal = useSelector((data) => data.reducer.subTotal);
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderCartContent = () => {
    if (userCart.carts.length === 0) {
      return <div className='flex mt-7 items-center justify-center'>No item in the cart</div>;
    }

    return (
      <>
        <ul className='list-decimal m-auto justify-center font-semibold'>
          {userCart.carts.map((k) => (
            <li key={k.id}>
              <div className="item items-center bg-green-50 rounded  flex my-5">
                <div className='w-2/3 font-semibold mr-3'>{k.name}</div>
                <div className='w-1/4 font-semibold mx-3 mr-5'>₹{k.price * k.qty}</div>
                <div className='flex font-semibold items-center justify-center w-1/3'>
                  <FaMinus onClick={() => { dispatch(decrement(k.id)) }} className='text-red-700 cursor-pointer' />
                  <span className="mx-2 text-blue-800">{k.qty}</span>
                  <FaPlus onClick={() => { dispatch(increment(k.id)) }} className='text-green-700 cursor-pointer' />
                </div>
                <div className='w-1/6 flex font-semibold items-center justify-center'>
                  <MdDelete className="ml-8 text-red-700"/>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-6 justify-center text-center text-2xl font-bold'>Sub Total ₹ {subTotal}</div>
        <div className="flex lg:flex-row-reverse justify-center mx-auto lg:mr-3 ">
          <Link href={"/checkout"}><button className="flex mt-5 mx-auto text-white bg-green-600 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-lg font-semiboldbold"><IoBagHandle className='m-1' />Pay ₹ {subTotal}</button></Link>
        </div>
      </>
    );
  };

  return (
    <div className='lg:justify-start m-auto md:justify-center container'>
      <h1 className='font-bold text-4xl my-8 text-center'>Checkout</h1>
      <h2 className='font-bold text-2xl lg:text-left lg:px-28 md:ml-8 mx-5 my-2' >1. Delivery Details</h2>
      <div className='mx-4 flex my-1'>
        <div className="container justify-center px-1 py-2 mx-auto">
          {/* <div className="lg:w-1/2 md:w-2/3 mx-auto"> */}
          <div className="lg:w-[80vw] md:w-2/3 lg:mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                  <input type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  <textarea id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="vill-city" className="leading-7 text-sm text-gray-600">Vill/ City/ Locality</label>
                  <input type="text" id="vill-city" name="vill-city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="postoffice" className="leading-7 text-sm text-gray-600">Post Office</label>
                  <input type="text" id="postoffice" name="postoffice" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                  <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="district" className="leading-7 text-sm text-gray-600">District</label>
                  <input type="text" id="district" name="district" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="pin" className="leading-7 text-sm text-gray-600">Pin</label>
                  <input type="number" id="pin" name="pin" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="landmark" className="leading-7 text-sm text-gray-600">Landmark</label>
                  <input type="text" id="landmark" name="landmark" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SAVE</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='font-bold text-2xl lg:text-left lg:px-28 md:ml-8 mx-5 my-2' >2. Review cart items</h2>
      <div ref={ref} className="h-auto sideCart z-10 lg:w-2/3 px-10 my-2 items-center container mx-auto justify-center">
        {isClient ? renderCartContent() : null}
      </div>
    </div>
  )
}

export default page;