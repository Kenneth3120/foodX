import './orderSuccess.css';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to the home page
  };

  const handleMyOrders = () => {
    navigate('/myorders'); // Redirect to the my orders page
  };

  return (
    <div className="order-success-container">
      <div className="order-success">
        <h1>Order Successful!</h1>
        <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
        <div className="button-container">
          <button className="continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button className="my-orders" onClick={handleMyOrders}>
            My Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
