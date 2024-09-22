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
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  // Use useEffect to trigger the API call only once when the component mounts
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
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/order-success' element={<OrderSuccess />} />
          <Route path='/myorders' element={<MyOrders />} />

          {/* <Route path='/verify' element={<Verify />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
