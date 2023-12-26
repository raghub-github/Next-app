"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

const Navbar = () => {
    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full")
            ref.current.classList.add("translate-x-0")
        } else if (!ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-0")
            ref.current.classList.add("translate-x-full")
        }
    }
    const ref = useRef();
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center  my-0 shadow-md'>
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
            <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 mx-7 justify-center items-center">
                <FiShoppingCart  className='text-4xl md:text-4xl' />
            </div>

            <div ref={ref} className="h-full w-100 sideCart fixed top-0 z-10 right-0 bg-pink-50 px-12 py-20 transform transition-transform translate-x-full">
                <h2 className='text-center font-bold text-xl'>Cart items</h2>
                <span onClick={toggleCart} className="absolute top-7 right-5 cursor-pointer text-4xl text-red-500"><IoIosCloseCircle /></span>
                <ul className='list-decimal font-semibold'>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold mx-3'>Shopping cart</div>
                            <div className='flex font-semibold items-center justify-center w-1/3'><FaMinus className='cursor-pointer' /> <span className="mx-3">1</span> <FaPlus /> </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold mx-3'>Shopping cart</div>
                            <div className='flex font-semibold items-center justify-center w-1/3'><FaMinus className='cursor-pointer' /> <span className="mx-3">1</span> <FaPlus /> </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold mx-3'>Shopping cart</div>
                            <div className='flex font-semibold items-center justify-center w-1/3'><FaMinus className='cursor-pointer' /> <span className="mx-3">1</span> <FaPlus /> </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold mx-3'>Shopping cart</div>
                            <div className='flex font-semibold items-center justify-center w-1/3'><FaMinus className='cursor-pointer' /> <span className="mx-3">1</span> <FaPlus /> </div>
                        </div>
                    </li>
                    <li>
                        <div className="item flex my-5">
                            <div className='w-2/3 font-semibold mx-3'>Shopping cart</div>
                            <div className='flex font-semibold items-center justify-center w-1/3'><FaMinus className='cursor-pointer' /> <span className="mx-3">1</span> <FaPlus /> </div>
                        </div>
                    </li>
                    
                </ul>
                <div className="flex">
                <button className="flex mt-10 mx-auto text-white bg-green-600 border-0 py-2 px-3 focus:outline-none hover:bg-green-600 rounded text-lg font-semiboldbold"><IoBagHandle className='m-1' />Checkout</button>
                <button className="flex mt-10 mx-auto text-white bg-red-500 border-0 py-2 ml-4 px-3 focus:outline-none hover:bg-rd-500 rounded text-lg font-semiboldbold">Clear Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
