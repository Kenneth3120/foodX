import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import axios from 'axios';
import OrderSuccess from './pages/orderSuccess/orderSuccess';
import MyOrders from './pages/MyOrders/MyOrders';
import './index.css'; // Ensure your styles are imported

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const registerUser = async () => {
      try {
        const response = await axios.post('https://food-x-delta.vercel.app/register');
        console.log('User registered:', response.data);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };

    registerUser();
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/66f084c5e5982d6c7bb2e9e9/1i8dod9qv';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className={`app`}>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/order-success' element={<OrderSuccess />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
      <div className="toggle-container">
        <div className="toggle-circle" onClick={toggleDarkMode}>
          <span className={`toggle-icon ${darkMode ? 'active' : ''}`}></span>
        </div>
      </div>
    </>
  );
};

export default App;
