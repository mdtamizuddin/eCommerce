import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';
import 'animate.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { QueryClient, QueryClientProvider } from 'react-query'
const root = ReactDOM.createRoot(document.getElementById('root'));


const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

reportWebVitals();
