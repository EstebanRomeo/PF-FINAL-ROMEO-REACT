
function ProductCard({img, nombre, precio, children }) {
    return (
    <div>
     <img src={img} alt={title} />
     <h2>{nombre}</h2>
     <p>{price}</p>
     <div> {children}</div>
    </div>
 )



}

export default ProductCard;