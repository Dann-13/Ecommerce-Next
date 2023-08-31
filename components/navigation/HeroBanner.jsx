import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';

export function Herobanner({ heroBanner }) {
  const imageUrl = urlFor(heroBanner.image[0].asset._ref).url(); // Genera la URL de la imagen

  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={imageUrl} alt="headphones" className='hero-banner-image' />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'> {heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
