import { Link } from "react-router-dom"
import RatingProduct from "./RatingProduct"
import '../../styles/itemProduct.scss'

const ItemProduct = ({product}) => {
  return (
    <div className="itemProduct">
    <img src={product.image} alt={product.name} />
    <Link to={`/product/${product._id}`}><h2>{product.name}</h2></Link>
    <div><RatingProduct value={product.rating} text={`${product.numReviews} reviews`}/></div>
    <h2>${product.price}</h2>
    </div>
  )
}

export default ItemProduct