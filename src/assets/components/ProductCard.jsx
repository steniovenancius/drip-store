
const ProductCard = ({imagem, categoria, titulo, preco}) => {

    return (  
        <div className="shadow-3 px-3 py-3 border-1 border-round-xl" style={{height:'auto'}}>
            <div className="relative">
                <img className="w-full" style={{width:'292px', height:'321px', objectFit:'contain'}} src={imagem} alt=""/>
                <h4 className="absolute top-0 left-0 py-1 px-2 border-round-md" style={{backgroundColor:'#E7FF86', fontSize:'14px', fontWeight:'700', color:'#474747'}}>30% OFF</h4>
            </div>
            <p className="mt-5 mb-0" style={{fontSize:'12px', color:'#8F8F8F'}}>{categoria}</p>
            <h1 className="mt-1 mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis" style={{fontSize:'24px', color:'#474747', fontWeight:'400'}}>{titulo}</h1>
            <div style={{display:'flex', gap:'10px'}}>
                <h3 className="my-1" style={{color:'#8F8F8F',textDecoration:'line-through', fontSize:'24px', fontWeight:'400'}}>R${preco.toFixed(2)}</h3>
                <h3 className="my-1" style={{color:'#1F1F1F',fontSize:'24px'}}>R$ {(preco*0.7).toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default ProductCard;