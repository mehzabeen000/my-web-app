import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import Category from './ProductCategories';
import { setSearchedProducts, setSelectedProduct } from "src/store/productReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { selectedCategory } = useSelector((state: any) => state.product);

  useEffect(() => {
    if (!selectedCategory) return
    console.log(selectedCategory);

    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(setSelectedProduct(data))
        dispatch(setSearchedProducts(data))
        navigate('/products')
      })
      .catch(error => console.error('Error fetching categories:', error));

  }, [dispatch, navigate, selectedCategory])

  return (
    <div>
      <Header />
      <WelcomeMessage />
      <Category />
    </div>
  );
};

export default LandingPage;