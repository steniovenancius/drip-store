import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { API } from "../../services";

const ProductListing = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
        const request = await API.get('products');
        setProducts(request.data);
    }

    useEffect(() => {
        buscarProdutos()
    }, [])

    console.log(products)

    return (
        <>
            <section className="overflow-hidden px-5">
                <h1>Lista de Produtos</h1>
                <ul className="grid list-none p-0">
                    {
                        products.map((product) => (
                            <li className="col-12 md:col-3">
                                <div>
                                    <ProductCard 
                                    imagem={product.image}
                                    categoria={product.category}
                                    titulo={product.title}
                                    preco={product.price} 
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    );
}

export default ProductListing;