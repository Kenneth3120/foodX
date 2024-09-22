import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    try {
      // Build the list of order items
      let orderItems = [];
      food_list.forEach((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = { ...item }; // Clone the item to avoid direct mutation
          itemInfo['quantity'] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });

      // Construct the order data
      let orderData = {
        userId: localStorage.getItem("userId"),  // Get userId from localStorage
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 19,  // Add delivery fee
      };

      console.log('Placing order with data:', orderData);

      // API request to place the order
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },  // Token for authentication
      });

      // Handle the response
      if (response.data.success) {
        console.log('Order placed successfully:', response.data);
        // Explicitly navigate to /order-success with the orderId as query param
        navigate(`/order-success?orderId=${response.data.orderId}`);
      } else {
        alert('Error in placing the order.');
      }
    } catch (error) {
      console.error('Error during order placement:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // const navigate = useNavigate();

  useEffect(() => {
    if(!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0){
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            required
            name='firstName'
            onChange={onChangeHandler}
            value={data.firstName}
            type='text'
            placeholder='First Name'
          />
          <input
            required
            name='lastName'
            onChange={onChangeHandler}
            value={data.lastName}
            type='text'
            placeholder='Last Name'
          />
        </div>
        <input
          required
          name='email'
          onChange={onChangeHandler}
          value={data.email}
          type='email'
          placeholder='Email Address'
        />
        <input
          required
          name='street'
          onChange={onChangeHandler}
          value={data.street}
          type='text'
          placeholder='Street'
        />
        <div className='multi-fields'>
          <input
            required
            name='city'
            onChange={onChangeHandler}
            value={data.city}
            type='text'
            placeholder='City'
          />
          <input
            required
            name='state'
            onChange={onChangeHandler}
            value={data.state}
            type='text'
            placeholder='State'
          />
        </div>
        <div className='multi-fields'>
          <input
            required
            name='zipcode'
            onChange={onChangeHandler}
            value={data.zipcode}
            type='text'
            placeholder='Zip code'
          />
          <input
            required
            name='country'
            onChange={onChangeHandler}
            value={data.country}
            type='text'
            placeholder='Country'
          />
        </div>
        <input
          required
          name='phone'
          onChange={onChangeHandler}
          value={data.phone}
          type='text'
          placeholder='Phone'
        />
      </div>

      {/* right */}
      <div className='place-order-right'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal:</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 19}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 19}</b>
            </div>
          </div>
          <button type='submit'>Place Order</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
