
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductHome from "./pages/ProductHome";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductHome/>} />
        <Route path='/cart/' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
