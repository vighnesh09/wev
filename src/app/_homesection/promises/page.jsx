"use client";
import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublicIcon from '@mui/icons-material/Public';
import { motion } from 'framer-motion';

const PromiseSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'radial-gradient(circle at 50% 50%, rgba(25, 118, 210, 0.03) 0%, transparent 50%)',
  }
}));

const PromiseGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  maxWidth: '1200px',
  margin: '0 auto',
  position: 'relative',
}));

const PromiseCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  background: '#fff',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0,0,0,0.05)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme, color }) => ({
  width: 56,
  height: 56,
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  transition: 'transform 0.3s ease',
  flexShrink: 0,
  '& svg': {
    fontSize: 28,
    color: '#fff'
  }
}));

const promises = [
  {
    icon: <VerifiedIcon />,
    title: 'Certified Quality',
    description: 'Every fragrance undergoes rigorous testing to ensure exceptional quality and authenticity.',
    color: 'rgba(25, 118, 210, 0.95)'
  },
  {
    icon: <SecurityIcon />,
    title: 'Secure & Safe',
    description: 'Your transactions are protected with bank-grade security systems and encryption.',
    color: 'rgba(46, 125, 50, 0.95)'
  },
  {
    icon: <LocalShippingIcon />,
    title: 'Express Delivery',
    description: 'Fast and reliable worldwide shipping with real-time package tracking.',
    color: 'rgba(245, 124, 0, 0.95)'
  },
  {
    icon: <PublicIcon />,
    title: 'Global Service',
    description: 'Serving perfume enthusiasts in over 150+ countries with 24/7 customer support.',
    color: 'rgba(156, 39, 176, 0.95)'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PromiseDisplay = () => {
  return (
    <PromiseSection>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Commitment to Excellence
            </Typography>
          </motion.div>
        </Box>

        <PromiseGrid>
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <PromiseCard elevation={0}>
                <IconWrapper 
                  className="icon-wrapper"
                  color={promise.color}
                >
                  {promise.icon}
                </IconWrapper>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    {promise.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7
                    }}
                  >
                    {promise.description}
                  </Typography>
                </Box>
              </PromiseCard>
            </motion.div>
          ))}
        </PromiseGrid>
      </Container>
    </PromiseSection>
  );
};

export default PromiseDisplay;