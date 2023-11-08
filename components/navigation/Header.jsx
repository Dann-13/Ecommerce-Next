import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import { BsSearchHeart } from 'react-icons/bs'
import Cart from '../product/Cart';

const Header = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();


    return (
        <header className='p-4 fixed w-full top-0 z-50 bg-white header'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-5 lg:mb-0'>
                    <Link href="/">
                        <img src='/logo_letras.png' className='bg-slate-50' width={150} height={100} />
                    </Link>
                </div>
                <div className='mb-5 lg:mb-0'>
                    <form class="m-0 relative mx-auto text-gray-600">
                        <input class="border-2 outline-none border-custom-pink hover:border-pink-500 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Buscar" />
                        <button type="submit" class="absolute right-0 top-[-12px] mt-5 mr-4">
                            <BsSearchHeart className='text-pink-200 hover:text-pink-600' size={25} />
                        </button>
                    </form>
                </div>
                <div className={`gap-3 md:!flex ${showCart ? 'md:flex' : 'md:hidden '}`}>
                    <div className='flex items-center mb-2 sm:mb-0'>
                        <button
                            type='button'
                            className='cart-icon'
                            onClick={() => {
                                setShowCart(true);
                            }}
                        >
                            <AiOutlineShopping />
                            <span className='cart-item-qty'>{totalQuantities}</span>
                        </button>
                    </div>
                    {showCart && <Cart />}
                </div>
            </div>
        </header>
    );
};

export default Header;
