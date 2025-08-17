"use client";
import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), 
          url("https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundSize: 'cover',
        backgroundPosition: { xs: 'center 40%', md: 'center 60%' },
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        backgroundRepeat: 'no-repeat',
        marginTop: '-64px',
        paddingTop: '64px',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: { 
            xs: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
            md: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)'
          },
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            color: 'white',
            gap: 3,
            animation: `${fadeIn} 1s ease-out`
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              opacity: 0.9,
              fontWeight: 400,
              animation: `${fadeIn} 1s ease-out`,
              mb: 1
            }}
          >
            Luxury Fragrances
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '0.02em',
              textTransform: 'none',
              animation: `${fadeIn} 1s ease-out 0.2s`,
              animationFillMode: 'both',
              fontFamily: 'Playfair Display, serif', // Make sure to add this font to your project
              background: 'linear-gradient(to right, #fff, #e2e2e2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Where Elegance<br />Meets Essence
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              maxWidth: '600px',
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.8,
              animation: `${fadeIn} 1s ease-out 0.4s`,
              animationFillMode: 'both',
            }}
          >
            Experience the art of refined fragrances, where each scent tells a story 
            of sophistication and timeless beauty.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              flexWrap: 'wrap',
              animation: `${fadeIn} 1s ease-out 0.6s`,
              animationFillMode: 'both',
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 500,
                borderRadius: '0',
                transition: 'all 0.3s ease',
                textTransform: 'none',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255,255,255,0.2)',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(to right, transparent, #000, transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'translateX(100%)',
                }
              }}
            >
              Explore Collection
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                color: 'white',
                borderColor: 'white',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 500,
                borderRadius: '0',
                borderWidth: '1px',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Discover More
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;