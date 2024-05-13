import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Box, Select, MenuItem } from '@mui/material';
import { setSearchedProducts } from "src/store/productReducer";

const ProductSearchAndSort = () => {
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { selectedProduct, searchedProducts } = useSelector((state: any) => state.product);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (!searchTerm) {
        dispatch(setSearchedProducts(selectedProduct));
        return
      }
      const searchData = selectedProduct.filter((elem: any) =>
        elem.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      dispatch(setSearchedProducts(searchData));
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, selectedProduct, dispatch]);

  const handleSort = (event: any) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);

    let sortedData = [...searchedProducts];

    if (selectedSortBy === 'lowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (selectedSortBy === 'highToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    }

    dispatch(setSearchedProducts(sortedData));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent='flex-end' padding={'10px'} gap={2}>
      <TextField
        label="Search by title"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        size='medium'
      />
      <Box>
        <Select
          value={sortBy}
          onChange={handleSort}
          displayEmpty
          inputProps={{ 'aria-label': 'Sort by' }}
          variant="outlined"
          size="medium"
        >
          <MenuItem value="" disabled>
            Sort by
          </MenuItem>
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default ProductSearchAndSort;
