import React from 'react'
import Link from 'next/link';
import { urlFor } from '../../lib/client';
export function HeroBanner2({ heroBanner }) {
    const imageUrl = urlFor(heroBanner.image[0].asset._ref).url(); // Genera la URL de la imagen
    return (
        <div className='p-10 w-full'>
            <div className='flex flex-col md:flex-row '>
                <div className='flex flex-col pt-10'>
                    <p className='font-sans text-lg'>Compra ahora</p>
                    <h3 className='font-sans text-5xl md:text-6xl'>ultimas unidades</h3>
                    <h1 className='font-sans text-7xl md:text-9xl'>{heroBanner.largeText1}</h1>
                </div>
                <div className='flex'>
                    <img src={imageUrl} alt="headphones" className='absolute pt-5 md:pt-0 right-5 md:right-60 w-[400px] lg:w-[600px] xl:w-120' />
                </div>
                <div className='pt-72 lg:ml-[400px]'>
                    <h5 className='font-sans'>Compralos ahora mismo!</h5>
                    <p className='font-Lobster'>{heroBanner.discount}</p>
                </div>
            </div>
        </div>
    )
}

