/**Archivo que contiene el pie de pagina en donde enseño redes sociales etc */

import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 FLashDev</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
