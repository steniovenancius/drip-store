const ProductCard = ({imagem, nome, preco, precoDesconto}) => {
    return (
        <div>
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <div>
                <p>{preco}</p>
                <p>{precoDesconto}</p>
            </div>
        </div>
    );
}

export default ProductCard;