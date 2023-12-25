import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2'>
            <div className="logo mx-5">
                <Image src={"/logo.png"} width={"110"} height={"30"} alt='logo' ></Image>
            </div>
            <div className="nav">
                <ul className='flex font-bold md:text-xl'>
                    <li><Link href="./">Home</Link></li>
                    <li><Link href="./about">About</Link></li>
                    <li><Link href="./contact">Contact</Link></li>
                    <li><Link href="./product">Product</Link></li>
                </ul>
            </div>
           <div className="cart absolute right-0 mx-5 top-8">
            <FaShoppingCart className='text-4xl' />
           </div>

        </div>
    )
}

export default Navbar
