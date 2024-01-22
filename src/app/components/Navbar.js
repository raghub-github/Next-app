"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { clearCart, removeFormCart, increment, decrement } from '../redux/slice';

// import { userData } from '../redux/userSlice';

const Navbar = () => {
    const userCart = useSelector((data) => data.cart.carts);
    const subTotal = useSelector((data) => data.cart.subTotal);
    // const products = useSelector((data) => data.products.products);
    // const user = useSelector((data) => data.userData.user);
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        setIsClient(true);
        setItemCount(userCart.reduce((total, item) => total + item.qty, 0));
    }, [userCart]);

    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full") || ref.current.classList.contains("hidden")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.remove("hidden");
            ref.current.classList.add("translate-x-0");
        } else if (!ref.current.classList.contains("translate-x-full") || !ref.current.classList.contains("hidden")) {
            ref.current.classList.remove("translate-x-0");
            ref.current.classList.add("translate-x-full");
            ref.current.classList.add("hidden");
        };
    };

    const ref = useRef();

    const renderCartContent = () => {
        if (userCart.length === 0) {
            return <div className='flex mt-7 items-center justify-center'>No item in the cart</div>;
        };

        return (
            <>
                <ul className='list-decimal font-semibold'>
                    {userCart.map((k) => (
                        <li key={k.id}>
                            <div className="item flex my-4">
                                <div className='w-2/3 font-semibold mx-3'>{k.name}</div>
                                <div className='flex font-semibold items-center justify-center w-1/3'>
                                    <FaMinus onClick={() => { dispatch(decrement(k.id)) }} className='cursor-pointer' />
                                    <span className="mx-3">{k.qty}</span>
                                    <FaPlus onClick={() => { dispatch(increment(k.id)) }} className='cursor-pointer' />
                                </div>
                                <div className='w-1/6 flex font-semibold items-center justify-center'>
                                    <span className="ml-8 text-green-700">₹{k.price * k.qty}</span>
                                </div>
                                <div className='w-1/5 flex font-semibold items-center justify-center'>
                                    <MdDelete onClick={() => { dispatch(removeFormCart({ id: k.id, qty: k.qty })) }} className="ml-8 text-red-700" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='mt-6 justify-center text-center text-xl'>Sub Total ₹ {subTotal}</div>
                <div className="flex">
                    <Link href={"/checkout"}><button onClick={toggleCart} className="flex mt-10 mx-auto text-white bg-green-600 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-lg font-semiboldbold"><IoBagHandle className='m-1' />Checkout</button></Link>
                    <button onClick={() => {
                        toggleCart();
                        dispatch(clearCart());
                    }} className="flex mt-10 mx-auto text-white bg-red-500 border-0 py-2 ml-4 px-3 focus:outline-none hover:bg-rd-500 rounded text-lg font-semiboldbold">Clear Cart</button>
                </div>
            </>
        );
    };
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center  my-0 shadow-md sticky top-0 z-10 bg-white'>
            <Link href={"./"}>
                <div className="logo mx-4">
                    <Image src={"/logo.png"} width={"80"} height={"10"} alt='logo' ></Image>
                </div>
            </Link>
            <div className="nav">
                <ul className='flex font-bold space-x-8 md:text-xl'>
                    <li><Link href="./tshirts">Tshirts</Link></li>
                    <li><Link href="./hoodies">Hoodies</Link></li>
                    <li><Link href="./stickers">Stickers</Link></li>
                    <li><Link href="./mugs">Mugs</Link></li>
                </ul>
            </div>
            <div className="flex cursor-pointer cart absolute right-0 mx-7 justify-center items-center">
                <Link href={"/login"}><MdAccountCircle className='text-4xl md:text-4xl mt-3   mx-3 text-pink-600' /></Link>
                <div className="flex justify-center items-center">
                    <div className="relative py-2">
                        <div className="t-0 absolute left-5">
                            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-pink-500 p-3 text-xs text-white">{itemCount}</p>
                        </div>
                        <FaShoppingCart onClick={toggleCart} className='text-4xl mt-3 file: h-8 w-8 text-blue-900 md:text-4xl' />
                    </div>
                </div>
            </div>

            <div ref={ref} className="h-[100vh] w-100 sideCart absolute top-0 z-10 right-0 bg-green-50 border px-10 py-20 transform transition-transform hidden translate-x-full">
                <h2 className='text-center font-bold text-xl'>Cart items</h2>
                <span onClick={toggleCart} className="absolute top-7 right-5 cursor-pointer text-4xl text-red-500"><IoIosCloseCircle /></span>
                {isClient ? renderCartContent() : null}
            </div>
        </div>
    )
};

export default Navbar;