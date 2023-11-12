import React from 'react'
import { FooterBanner } from '../components/navigation/FooterBanner';
import { Product } from '../components/product/Product'
import { CarouselSlides } from '../components/navigation/CarouselSlides'
import {ProductHeader} from '../components/sections/ProductHeader'
import { client } from '../lib/client'

const Home = ({ products, imagesArray, productsMaquillajeData, productsDetalleData }) => {
  return (
    <div>
      {/*Aqui el carrusel */}
      <CarouselSlides imagesUrl={imagesArray} />
      <ProductHeader title="Nuestros Productos" />
      <div className='flex justify-center py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-[80%]'>
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
      <ProductHeader title={"Maquillaje"} />
      <div className='flex justify-center py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-[80%]'>
          {productsMaquillajeData?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
      <ProductHeader title="Detalles Para Ocacion" />
      <div className='flex justify-center py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-[80%]'>
          {productsDetalleData?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
      {/* <FooterBanner footerBanner={bannerDa ta && bannerData[0]} /> */}
    </div>
  )
}

// Función getServerSideProps para obtener 4 conjunto datos en el servidor antes de renderizar
export const getServerSideProps = async () => {
  // Consulta para obtener 8 documentos de tipo "product" desde Sanity.io
  const query = '*[_type == "product"][0...8]';
  const products = await client.fetch(query);
  //Consulta para obtener las url de todas las imagenes de documento Carousel
  const corouselQuery = '*[_type == "carousel"] {images[]{asset->{url}}}';
  const corouselData = await client.fetch(corouselQuery);
  //Consulta para obtener los productos tipo maquilaje
  const productsMaquillajeQuery = '*[_type == "product" && category == "maquillaje"][0...4]';
  const productsMaquillajeData = await client.fetch(productsMaquillajeQuery);
   //Consulta para obtener los detalles
  const productsDetalleQuery = '*[_type == "product" && category == "detalles"][0...4]';
  const productsDetalleData = await client.fetch(productsDetalleQuery);
  // Procesamiento para crear un array solo con las URLs de las imágenes
  const imagesArray = corouselData.reduce((acc, cur) => {
    cur.images.forEach(image => {
      acc.push(image.asset.url);
    });
    return acc;
  }, []);

  // Devuelve un objeto con las propiedades products y bannerData, que se pasarán al componente Home
  return {
    props: { products, imagesArray, productsMaquillajeData, productsDetalleData }
  };
};

// Exporta el componente Home como el componente predeterminado para este archivo
export default Home;
