import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductDetail } from "../Redux/productSlice"
import { fetchAddToCart } from "../Redux/cartSlice"
import RatingProduct from "../components/homePage/RatingProduct"
import { Link } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import '../styles/productHome.scss'

import NotificationContainer from "react-notifications/lib/NotificationContainer"
import NotificationManager from "react-notifications/lib/NotificationManager"

const Added = () => {
    return (
        <div class="wrapper">
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
        </div>
    )
}


const ProductHome = () => {

    const {cartItems} = useSelector(state => state.cart)


    const {loading } = useSelector(state => state.productsState)
    const product = useSelector(state => state.productsState.productDetail)

    const dispatch = useDispatch()

    const {id} = useParams()

    const [quantity, setQuantity] = useState(1)

    const [check, setCheck] = useState(false)

    useEffect(() => {
        dispatch(fetchProductDetail(id))
    }, [dispatch, id])


  
    

    //////////// NOFITICATION CONFIG ///////////////


    useEffect( () => {

        

    }, [] )

    const notificationsConfig = (id, quantity) => {
        const itemExist = cartItems.find( x => x.id === id )


        if (itemExist) {

            if (itemExist.quantity === quantity) {
                NotificationManager.warning('Warning', 'Your produc exists in your cart', 1000)
                setCheck(false)
            } else {
                NotificationManager.success('Update', 'Your cart is update', 1000)
                setCheck(true)
        
            }
            
        } else {
            setCheck(true)
        }
        

    }

    const addToCartHandler = () => {
        dispatch(fetchAddToCart({
            id: product._id,
            quantity
        }))

        notificationsConfig(id, quantity)

   
  
    }

  return (
    <>

<NotificationContainer/>

    {loading ? <div style={{ display: 'grid', justifyContent: 'center', minHeight: '50vh', marginTop: '200px' }}>
  <Spinner animation='border'></Spinner></div> :  
    
    
    <div className="productDetail">

  <div className="productDetail-section1">
    <img src={product.image} alt="" />
    <Link to='/'>Go back</Link>
  </div>

  <div className="productDetail-section2">
      <h1>{product.name}</h1>
      <RatingProduct value={product.rating} text={`${product.numReviews} Reviews`}/>
      <h3>${product.price}</h3>
      <p>{product.description}</p>
  </div>

  <div className="productDetail-section3">

      <div className="productDetail-section3-myOrder">
      <p>Price: </p> <p>${product.price}</p>
      <p>Status:</p> <p>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
      {
        product.countInStock > 0 && (
          
          <form action="" className="productDetail-section3-myOrder-form">
              <p>Quantity:</p>
              <select name="quantity" id="" value={quantity} onChange={ e => setQuantity(e.target.value) }>
                {
                  [ ...Array(product.countInStock).keys()].map( x => (
                    <option value={x + 1} key={x + 1}>{ x + 1}</option>
                  ) )
                }
              </select>
          </form>
        )
      }
      
      </div>
      
  
      
        <div className="productHome-sectionAddToCart">
            <button type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                Add to cart 
            </button> { check ? <Added/> : '' } 
        </div>

    
 


  </div>

    

</div>
    
    
    
    }

    

</>
  )
}

export default ProductHome