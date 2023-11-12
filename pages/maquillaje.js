import Link from 'next/link';
import { client } from '../lib/client';
import { Product } from '../components/product/Product';
import { ProductHeader } from '../components/sections/ProductHeader'
function MaquillajePage({ products }) {
    return (
        <div>
            <ProductHeader title='Encuentra Todo Tipo de Maquillaje' />
            <ul>


                <div className='flex justify-center py-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-[80%]'>
                        {products?.map((product) =>
                            <Link href={`/product/${product.slug.current}`}>
                                <Product key={product._id} product={product} />
                            </Link>)}
                    </div>
                </div>
            </ul>
        </div>
    );
}

export const getStaticProps = async () => {
    const productsQuery = '*[_type == "product" && category == "maquillaje"]'; // Filtrar por la categoría "maquillaje"

    const products = await client.fetch(productsQuery);

    return {
        props: { products }
    };
};

export default MaquillajePage;
