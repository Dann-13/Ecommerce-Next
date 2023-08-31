import React from 'react'
import { Herobanner } from '../components/navigation/HeroBanner';
import { FooterBanner } from '../components/navigation/FooterBanner';
import {Product} from '../components/product/Product'
import {client} from '../lib/client'

const Home = ({products, bannerData}) => {
  return (
    <div>
      <Herobanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Los mejores productos</h2>
        <p>para vivir la musica</p>
      </div>

      <div className='products-container'>
          {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: { products, bannerData }
  }
}

export default Home
