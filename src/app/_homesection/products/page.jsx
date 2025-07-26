"use client";
import React, { useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ProductWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(to bottom, #ffffff, #f8f8f8)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 100%)',
    backdropFilter: 'blur(10px)',
    zIndex: 0,
  }
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: theme.spacing(4, 0),
}));

const SliderTrack = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  cursor: 'grab',
  '&:active': {
    cursor: 'grabbing',
  },
  overflowX: 'auto',
  overflowY: 'hidden',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  paddingBottom: theme.spacing(2), // Add padding to prevent cut-off shadows
}));

const ProductCard = styled(Card)(({ theme }) => ({
  minWidth: 280,
  maxWidth: 280,
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 22px 45px rgba(0,0,0,0.08)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.08)',
    },
    '&::after': {
      opacity: 1,
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  }
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 320,
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
  }
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
  width: 48,
  height: 48,
  '&:hover': {
    backgroundColor: 'white',
    transform: 'translateY(-50%) scale(1.1)',
  },
  transition: 'all 0.3s ease',
  zIndex: 2,
}));

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const products = [
  {
    id: 1,
    name: 'Eternal Rose',
    description: 'A captivating blend of Bulgarian rose and vanilla',
    price: '$189.99',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Ocean Breeze',
    description: 'Fresh marine notes with citrus undertones',
    price: '$159.99',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Midnight Oud',
    description: 'Rich agarwood complemented by spicy notes',
    price: '$249.99',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Golden Amber',
    description: 'Warm amber with sweet vanilla and musk',
    price: '$199.99',
    image: 'https://images.unsplash.com/photo-1590736704728-f4e505a62012?auto=format&fit=crop&q=80'
  },
  // Add more products as needed
];

const Products = () => {
  const sliderRef = useRef(null); // Remove TypeScript type
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scroll = (direction) => { // Remove TypeScript type
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <ProductWrapper>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box sx={{ mb: 6, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <Typography 
              component={motion.div}
              variants={itemVariants}
              variant="overline" 
              sx={{ 
                color: 'primary.main',
                letterSpacing: '0.2em',
                mb: 1,
                display: 'block'
              }}
            >
              Our Collection
            </Typography>
            <Typography 
              component={motion.h2}
              variants={itemVariants}
              variant="h2" 
              sx={{ 
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                background: 'linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Fragrances
            </Typography>
            <Typography 
              component={motion.p}
              variants={itemVariants}
              variant="body1" 
              color="text.secondary"
              sx={{ 
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
                lineHeight: 1.8
              }}
            >
              Discover our curated collection of luxury perfumes, each crafted to evoke unique emotions and memories.
            </Typography>
          </Box>

          <SliderContainer>
            {!isMobile && (
              <>
                <NavButton 
                  onClick={() => scroll('left')} 
                  sx={{ left: { xs: -10, md: -20 } }}
                >
                  <ChevronLeft />
                </NavButton>
                <NavButton 
                  onClick={() => scroll('right')} 
                  sx={{ right: { xs: -10, md: -20 } }}
                >
                  <ChevronRight />
                </NavButton>
              </>
            )}

            <SliderTrack
              ref={sliderRef}
              as={motion.div}
              variants={containerVariants}
            >
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  component="div" // Fix: Change motion.div to "div"
                  variants={itemVariants}
                >
                  <ProductImage
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography 
                      gutterBottom 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 0.5 
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        mb: 2,
                        opacity: 0.8 
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="primary"
                      sx={{ 
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                </ProductCard>
              ))}
            </SliderTrack>
          </SliderContainer>
        </motion.div>
      </Container>
    </ProductWrapper>
  );
};

export default Products;