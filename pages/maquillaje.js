import Link from 'next/link';
import { client } from '../lib/client';

function MaquillajePage({ products }) {
    return (
        <div>
            <h1>Productos de Maquillaje</h1>
            <ul>
                {products.map(product => (
                    <Link href={`/product/${product.slug.current}`}>
                        <li key={product._id}>{product.name}</li>
                    </Link>

                ))}
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
