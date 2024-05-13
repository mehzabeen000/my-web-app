import { useSelector } from 'react-redux';
import ProductDetail from './ProductDetail';
import Grid from '@mui/material/Grid';
import Header from '../Home/Header';
import ProductSearchAndSort from './ProductSearchSort';

const ProductsScreen = () => {
  const { searchedProducts, } = useSelector((state: any) => state.product);

  return (
    <>
      <Header />
      <ProductSearchAndSort />
      <Grid container justifyContent={'center'} direction={'row'} alignItems={'center'} p={10} spacing={3}>
        {searchedProducts?.map((product: any) => {
          return (
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ProductDetail
                key={`${product.id}--${product.title}`}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
                image={product.image}
              />
            </Grid>
          )
        })}
      </Grid >
    </>
  );
};

export default ProductsScreen;
