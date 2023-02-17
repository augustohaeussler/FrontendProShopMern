import ProductScreen from "../components/homePage/ProductScreen"
import '../styles/homePage.scss'

const HomePage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-mainTitle'>
            <h1>Welcome to Proshop</h1>
            <p>By haeussler.dev</p>
        </div>

        <ProductScreen/>

    </div>
  )
}

export default HomePage