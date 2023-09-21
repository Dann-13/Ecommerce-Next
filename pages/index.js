import React from 'react'
import { Herobanner } from '../components/navigation/HeroBanner';
import { FooterBanner } from '../components/navigation/FooterBanner';
import { Product } from '../components/product/Product'
import { client } from '../lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <div>
      {/* Componente Herobanner con el primer elemento de bannerData como heroBanner */}
      <Herobanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Los mejores productos</h2>
        <p>para vivir la musica</p>
      </div>

      <div className='products-container'>
        {/* Mapea la lista de productos y renderiza cada uno usando el componente Product */}
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      {/* Componente FooterBanner con el primer elemento de bannerData como footerBanner */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
