"use client";

import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Divider, Fade, Breadcrumbs, Link, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import FilterSection from '../../../components/FilterSection';
import ProductCard from '../../../components/ProductCard';
import Loader from '../../../components/Loader';
import { fetchPerfumeProducts } from '../../../services/api';

export default function Shop() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: '',
    category: '',
    size: '',
    minRating: 0,
    inStock: false
  });

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true); // Set to true before fetching
      try {
        const response = await fetchPerfumeProducts(filters);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    setMounted(true);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <Fade in={mounted}>
      <Box sx={{ display: 'flex' }}>
        <FilterSection 
          filters={filters}
          onFilterChange={handleFilterChange}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Container maxWidth="lg">
            {/* Breadcrumbs */}
            <Breadcrumbs sx={{ mb: 4 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Typography color="text.primary">Shop</Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box 
              textAlign="center" 
              mb={8} 
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="overline" 
                color="primary"
                sx={{
                  letterSpacing: '0.2em',
                  mb: { xs: 1, sm: 2 },
                  display: 'block',
                  fontSize: { xs: '0.7rem', sm: '0.75rem' }
                }}
              >
                LUXURY COLLECTION
              </Typography>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  background: 'linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2
                }}
              >
                Our Perfumes
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary"
                sx={{ 
                  mb: { xs: 3, sm: 4 },
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
                  px: { xs: 2, sm: 0 }
                }}
              >
                Discover our exclusive collection of luxury fragrances, 
                crafted with passion and precision
              </Typography>
              <Divider sx={{ 
                width: '60px', 
                margin: '0 auto', 
                borderColor: 'primary.main',
                borderWidth: 2
              }} />
            </Box>

            {/* Products Grid */}
            {loading && <Loader />}
            <Grid 
              container 
              spacing={{ xs: 2, md: 3 }}
              sx={{ 
                mt: { xs: 2, sm: 4 },
                width: '100%',
                margin: '0 auto'
              }}
            >
              {products.length > 0 ? (
                products.map((product, index) => (
                  <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    lg={3} 
                    key={product.id}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{ 
                      display: 'flex',
                      // width: '100%'
                    }}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Box 
                    textAlign="center" 
                    py={8}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      No products found
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
}