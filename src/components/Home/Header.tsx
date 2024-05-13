import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { setSelectedCategory } from 'src/store/productReducer';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cart, selectedCategory } = useSelector((state: any) => state.product);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ABC Store
        </Typography>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center' }}>
            {/* <li style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => navigate('/')} >Home</li> */}
            <li style={{ margin: '0 10px', cursor: 'pointer' }} onClick={() => {
              dispatch(setSelectedCategory(''))
              navigate('/')
            }
            }>Category {selectedCategory ? <span>({selectedCategory.toUpperCase()})</span> : <></>}</li>
            <li style={{ margin: '0 10px', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
              Cart
              <span>({cart.length})</span>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
