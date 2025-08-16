"use client";
import React from 'react';
import { Box, Container, Typography, Button, Card, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0), // Reduced padding on mobile
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
  background: '#fff',
}));

const GiftWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(6),
    marginBottom: theme.spacing(10),
  },
}));

const GiftImage = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  [theme.breakpoints.up('md')]: {
    flex: 1,
    maxWidth: 600,
  },
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(2),
    objectFit: 'cover',
  }
}));

const GiftContent = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(0, 2),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    flex: 1,
    padding: 0,
    textAlign: 'left',
  },
}));



const GiftSection = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg">
        <GiftWrapper>
          <GiftImage>
            <img 
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80" 
              alt="Gift Box"
              loading="lazy"
            />
          </GiftImage>
          <GiftContent>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'text.secondary',
                letterSpacing: '0.1em',
                mb: 1,
                display: 'block',
                fontSize: { xs: '0.7rem', sm: '0.75rem' }
              }}
            >
              DIGITAL CORPORATE GIFTING
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 500,
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: { xs: 1.2, md: 1.3 }
              }}
            >
              Gift Cards
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                mb: { xs: 3, md: 4 },
                maxWidth: { xs: '100%', md: 500 },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                px: { xs: 2, md: 0 }
              }}
            >
              Want to gift creativity to your team, but not sure what they'll like? 
              When you send a digital corporate gift card to Purenso Select, the recipient can choose their own kit.
            </Typography>
            <Button 
              variant="outlined" 
              size="large"
              sx={{
                borderColor: 'text.primary',
                color: 'text.primary',
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                fontSize: { xs: '0.8rem', sm: '0.875rem' },
                borderWidth: '1px',
                '&:hover': {
                  borderColor: 'text.primary',
                  borderWidth: '1px',
                  backgroundColor: 'rgba(0,0,0,0.04)'
                }
              }}
            >
              SEND A GIFT CARD
            </Button>
          </GiftContent>
        </GiftWrapper>
      </Container>
    </StyledSection>
  );
};

export default GiftSection;