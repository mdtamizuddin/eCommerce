import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCatagories from './Components/AllCatagories/AllCatagories';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Subscrive from './Components/Shared/Subscrive';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Reviews from './Components/ProductDetails/Reviews';
import Description from './Components/ProductDetails/Description';
import GitftCard from './Components/ProductDetails/GitftCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Cart/Checkout';
import Payment from './Payment/Payment';
import Dashboard from './Components/DashBoard/Dashboard'
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/Blog/BlogDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<AllCatagories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/details' element={<BlogDetails />} />


        <Route path='/checkout/:id' element={<Checkout />} />
        <Route path='/dashboard' element={<Dashboard />} />




        <Route path='/products/:id' element={<ProductDetails />}>
          <Route index element={<Reviews />} />
          <Route path='review' element={<Reviews />} />
          <Route path='description' element={<Description />} />
          <Route path='gift-card' element={<GitftCard />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Subscrive />
      <Footer />
    </div>
  );
}

export default App;
