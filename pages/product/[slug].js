import React, { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components/product/Product';
import { useStateContext } from '../../context/StateContext';

function ProductDetails({ product, products }) {
  // Extracción de datos del producto pasado como propiedad
  console.log("holassssssssss" + product)
  const { image, name, details, price } = product;
  
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div>
      <div className='product-detail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[index])}
              className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={i === index
                  ? 'small-image selected-image'
                  : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button 
              type="button"  
              className="add-to-cart" 
              onClick={() => onAdd(product, qty)}>
                Agregar
            </button>
            <button 
              type="button" 
              className="buy-now" 
              >
                Comprar
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>Elige el que + te guste</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>





    </div>
  )
}
// Función getStaticPaths para generar las rutas dinámicas
export const getStaticPaths = async () => {
  // Consulta para obtener todos los productos y sus slugs
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }`;

  const products = await client.fetch(query);
  // Creación de las rutas para los productos
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}
// Función getStaticProps para obtener los datos de un producto específico
export const getStaticProps = async ({ params: { slug } }) => {
  // Consulta para obtener los datos del producto basado en el slug
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product }
  }
}
export default ProductDetails
