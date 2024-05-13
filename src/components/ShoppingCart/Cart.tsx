import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button } from '@mui/material'; // Import Material-UI components
import Header from '../Home/Header';
import { removeItemFromCart } from 'src/store/productReducer';

const CartListingPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: any) => state.product);
  const totalAmount = cart.reduce((total: number, item: any) => total + item.price, 0);

  const handleRemoveItem = (item: any) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <div>
      <Header />
      <div style={{ padding: '10px' }}>
        <Typography variant="h2">Shopping Cart</Typography> {/* Use Typography component */}
        {cart.map((item: any) => (
          <div key={`${item.id}--${item.title}`}>
            <Typography variant="body1">{item.title} - ${item.price}</Typography> {/* Use Typography component */}
            <Button onClick={() => handleRemoveItem(item)} variant="contained" color="secondary">Remove</Button> {/* Use Button component */}
          </div>
        ))}
        <Typography variant="body1">Total: ${totalAmount}</Typography> {/* Use Typography component */}
      </div>
    </div>
  );
};

export default CartListingPage;
