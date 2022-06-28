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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<AllCatagories />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Subscrive />
      <Footer />
    </div>
  );
}

export default App;
