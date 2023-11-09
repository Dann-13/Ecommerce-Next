import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../lib/client'
// Componente Product que representa la tarjeta de un producto
export function Product({ product: { image, name, slug, price } }) {
  return (
    <div className='flex flex-col items-center'>
      {/* Enlace a la página de detalles del producto utilizando el slug */}
      <Link href={`/product/${slug.current}`} >
        <div className='product-card'>
          {/* Imagen del producto con dimensiones fijas */}
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
          />
          {/* Nombre del producto */}
          <p className='product-name'>{name}</p>
          {/* Precio del producto */}
          <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

