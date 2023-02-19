import { Link, NavLink } from "react-router-dom"
import '../styles/header.scss'
import { useSelector } from "react-redux"


const Header = () => {

    const {cartItems} = useSelector( state => state.cart)


  return (
    <div className="header">
    <Link to='/' className="header-linkBrand">Proshop</Link>

<div className="header-links">


      <NavLink to='/cart' className='link-header-cart'>
          <i className="fa-solid fa-cart-shopping"></i><div className="header-links-quantity">{cartItems.length === 0 ? '0' : cartItems.length}</div> My Cart  
      </NavLink>

    
      <NavLink to='/login'>
          <i className="fa-solid fa-user"></i>Login
      </NavLink> 
</div>
</div>
  )
}

export default Header