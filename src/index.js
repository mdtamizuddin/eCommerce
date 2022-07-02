import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'swiper/css';
import 'animate.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dashboard from './Components/DashBoard/Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query'
import User from './Components/DashBoard/Component/User';
import Order from './Components/DashBoard/Component/Order';
import Products from './Components/DashBoard/Component/Products';
const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route index element={<User />} />
          <Route path='orders' element={<Order />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

reportWebVitals();
