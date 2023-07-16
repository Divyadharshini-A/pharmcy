import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Header,Footer } from './components';
import {Home,Contact,Login,Register,Reset,NotFound} from "./pages";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import OrderDetails from "./pages/orderDetails/OrderDetails";
function App() {
return (
    <>
      <BrowserRouter>
      <ToastContainer/>
       <Header/>
       <Routes>
        <Route path ="/" element = {<Home/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path ="/login" element = {<Login/>} />
        <Route path ="/register" element = {<Register/>} />
        <Route path ="/reset" element = {<Reset/>} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/order-details/:id" element={<OrderDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="*" element={<NotFound />} />
       </Routes>
       <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
