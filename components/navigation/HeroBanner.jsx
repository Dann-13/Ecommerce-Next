
import React from 'react';
import Link from 'next/link';
export function Herobanner() {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src='' alt='Audifonos' className='hero-banner-image' />

        <div>
          <Link href='/product/ID'>
            <button type='button'> Button Text</button>
          </Link>
          <div className='desc'>
              <h5>Description</h5>
              <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}