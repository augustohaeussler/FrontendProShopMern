import '../../styles/productScreen.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../Redux/productSlice'
import { Spinner } from 'react-bootstrap'
import ItemProduct from './ItemProduct'


const ProductScreen = () => {

    const {loading} = useSelector(state => state.productsState)
    const {product} = useSelector(state => state.productsState)

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchProducts())
    }, [dispatch] )

  return (
    <div className='productScreen'>

      {product.map( (product) => 
        <div key={product._id}>

          { loading ? <div>
      <Spinner animation='border'></Spinner></div> : 
      
      <ItemProduct product={product} />
      }

          
        </div>
       )}

    </div>
  )
}

export default ProductScreen