'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/productActions';
import { 
  Box, 
  Grid, 
  Typography, 
  CircularProgress, 
  Container,
  Divider 
} from '@mui/material';
import ProductCard from '../../../components/ProductCard';

export default function Shop() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Box py={6}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Our Perfumes
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            Discover our exclusive collection of luxury fragrances
          </Typography>
          <Divider sx={{ mb: 6 }} />
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              lg={3} 
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}