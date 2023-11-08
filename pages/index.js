import React from 'react'
import { HeroBanner2 } from '../components/navigation/HeroBanner2';
//import { HeroBanner } from '../components/navigation/HeroBanner';
import { FooterBanner } from '../components/navigation/FooterBanner';
import { Product } from '../components/product/Product'
import {Carousel} from '../components/navigation/Carousel'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <div>
      {/* Componente Herobanner con el primer elemento de bannerData como heroBanner */}
      {/* <HeroBanner2 heroBanner={bannerData.length && bannerData[0]} /> */}
      {/*Aqui el carrusel */}
      <Carousel />
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <img
          className='w-44 md:w-56'
          src='/separador.svg'

        />
        <h2 className='font-sans p-4 text-2xl'>Nuestros Productos</h2>
        <img
          className='w-44 md:w-56'
          src='/separador.svg'
        />
      </div>



      {/* <div className='products-container'>
        
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
  
      <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </div>
  )
}

// Función getServerSideProps para obtener datos en el servidor antes de renderizar
export const getServerSideProps = async () => {
  // Consulta para obtener todos los documentos de tipo "product" desde Sanity.io
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // Consulta para obtener todos los documentos de tipo "banner" desde Sanity.io
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // Devuelve un objeto con las propiedades products y bannerData, que se pasarán al componente Home
  return {
    props: { products, bannerData }
  };
};

// Exporta el componente Home como el componente predeterminado para este archivo
export default Home;
