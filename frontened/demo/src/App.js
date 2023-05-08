
import './App.css';
import { ProductPage } from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import {Sign} from './Components/Sign';
import { Login } from './Components/login';
import Main from './Components/main';
import { Nav } from './Components/Navbar';
import { Footer } from './Components/Footer';
import SinglePage from './Components/SinglePage';
import { Cart } from './Components/CartPage/Cart';
import  Checkout from './Components/Chcekout';
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin  from "./Pages/AdminLogin/AdminLogin"
import AdminProduct from "./Pages/AdminProduct/AdminProduct"
import AdminUserSection from './Pages/AdminUserSection/AdminUserSection';
import Order from './Pages/Order';

function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes>
        <Route path="/dashboard/order" element={<Order/>}></Route>
        <Route path='/dashboard/user/' element={<AdminUserSection/>}></Route>
        <Route path='/dashboard/adminProduct' element={<AdminProduct/>}></Route>
        <Route path='/dashboard/adminLogin' element={<AdminLogin/>}></Route>
        <Route path='/dashboard'element={<AdminDashboard/>}></Route>
        <Route path="/" element ={<Main/>}></Route>
        <Route path='/products/mobiles' element={<ProductPage path={"mobiles"}/>} />
        <Route path='/products/mens' element={<ProductPage path={"mens"}/>} />
        <Route path='/products/womens' element={<ProductPage path={"womens"}/>} />
        <Route path='/products/kids' element={<ProductPage path={"kids"}/>} />
        <Route path='/products/electronics' element={<ProductPage path={"electronics"}/>} />
        <Route path='/products/books' element={<ProductPage path={"books"}/>} />
        <Route path='/products/beauty' element={<ProductPage path={"beauty"}/>} />
        <Route path ="/products/:path/single/:id" element ={<SinglePage/>}></Route>
        <Route path ="/cart" element ={<Cart/>}></Route>
        <Route path ="/checkout" element ={< Checkout/>}></Route>
        <Route path='/register' element={  <Sign/>} />
        <Route path='/login' element={ <Login/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
