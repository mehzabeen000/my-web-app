import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSelectedCategory } from "src/store/productReducer";
import { List, ListItem, ListItemText } from '@mui/material';

const ProductCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: any) => state.product);

  useEffect(() => {
    if (categories.length) return
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => {
        dispatch(setCategory(data))
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryClick = (category: any) => {
    dispatch(setSelectedCategory(category))
  };

  return (
    <List sx={{ display: 'flex', gap: '2px', alignItems: 'center', padding: '10px', flexDirection: 'column' }} >
      {categories.map((category: any, index: number) => (
        <ListItem key={`${category}--${index}`} onClick={() => handleCategoryClick(category)} sx={{ border: '1px solid black', maxWidth: '400px', cursor: 'pointer' }}>
          <ListItemText primary={category.toUpperCase()} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductCategories;
