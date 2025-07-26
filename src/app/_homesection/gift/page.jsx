"use client";
import React from 'react';
import { Box, Container, Typography, Button, Card, CardMedia, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: '#fff',
}));

const GiftWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  gap: theme.spacing(6),
  marginBottom: theme.spacing(10),
}));

const GiftImage = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  '& img': {
    width: '100%',
    maxWidth: 600,
    height: 'auto',
    borderRadius: theme.spacing(2),
  }
}));

const GiftContent = styled(Box)(({ theme }) => ({
  flex: 1,
  textAlign: { xs: 'center', md: 'left' },
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
            />
          </GiftImage>
          <GiftContent>
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'text.secondary',
                letterSpacing: '0.1em',
                mb: 1,
                display: 'block'
              }}
            >
              DIGITAL CORPORATE GIFTING
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Gift Cards
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                maxWidth: 500
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
                px: 4,
                py: 1.5,
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