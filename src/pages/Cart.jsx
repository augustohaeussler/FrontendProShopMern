import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRemoveToCard, fetchAddToCart } from '../Redux/cartSlice'
import '../styles/cart.scss'

const Cart = () => {



    const {cartItems} = useSelector( state => state.cart)

    const dispatch = useDispatch()



    const removeFromCartHandler = (id) => {
        dispatch(fetchRemoveToCard(id))
      }

      const navigate = useNavigate()
  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  return (
<Row className='cart'>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        { cartItems.length === 0 ? 
        <Alert variant='warning'>Your cart is empty <Link to='/'>Go back</Link> </Alert> :
         (

          <ListGroup variant='flush'>
            { 
              cartItems.map( item => (

                <ListGroup.Item  key={item.id} >
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded style={{width: 100, heigth: 100}} />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      ${item.price}
                    </Col>
                    <Col md={2}>
                      <Form.Control
                            as='select'
                            value={item.quantity}
                            onChange={e => dispatch(fetchAddToCart({id: item.id, quantity: Number(e.target.value)
                            
                            })) }
                      >
                        {[...Array(item.countInStock).keys()].map( x => (
                          <option key={x + 1} value={x + 1}>{ x + 1}</option>
                        ))
                        }

                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type='button' variant='ligth' onClick={() => removeFromCartHandler(item.id)}><i className='fas fa-trash'></i></Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
            

              ) )

              
            }

          </ListGroup>

         )

        }
        



      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({  Number(cartItems.reduce( (acc, item) => acc + item.quantity, 0 )) }) items</h2>
              <p>${cartItems.reduce( (acc, item) => acc + item.quantity * item.price, 0 ).toFixed(2) }</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button'  variant='dark' className='btn-block'
                disabled={cartItems.length === 0 } onClick={checkoutHandler}>
                  Go to check out
                </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      
    </Row>
  )
}

export default Cart