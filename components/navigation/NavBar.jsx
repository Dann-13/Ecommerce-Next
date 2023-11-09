/**EL primer componente, en este esta el logo y el carrito de compras */
import React from 'react'
const NavBar = () => {

  return (
    <div className='mt-[11.5rem] lg:mt-[4.5rem] bg-custom-pink'>
      <div className='flex justify-center'>
        <ul className='flex text-center p-3'>
          <li className='mr-6'>
            <button className="text-base leading-7 text-gray-800 bg-transparent rounded-md px-3 py-1 hover:text-pink-600 focus:outline-none focus:ring focus:border-gray-600 font-sans">Maquillaje</button>
          </li>
          <li className=''>
            <button className="text-base leading-7 text-gray-800 bg-transparent rounded-md px-3 py-1 hover:text-pink-600 focus:outline-none focus:ring focus:border-gray-600 font-sans">Para toda ocasión</button>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar
