import { addCartItem } from "src/store/productReducer";
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = ({ id, title, price, category, description, image }: any) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: any) => state.product);

  const handleAddToCart = () => {
    dispatch(addCartItem({ id, title, price, category, description, image }))
  };

  const isInCart = cart.some((item: any) => item.id === id);

  return (
    <Card sx={{ width: '500px', height: '700px', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ objectFit: 'fill' }}
        height="250px"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
      </CardContent>
      <Button onClick={handleAddToCart} variant="contained" disabled={isInCart} color="primary" sx={{ marginTop: 'auto', marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto', width: '50%' }}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </Button>
    </Card >
  );
};

export default ProductDetail;
