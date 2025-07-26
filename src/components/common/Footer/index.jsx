'use client';
import React, { useState } from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Link,
  Stack,
  Snackbar,
  Alert
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const StyledFooter = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #1a1a1a, #2d2d2d)', // Softer dark gradient
  color: '#fff',
  padding: theme.spacing(6, 0),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #64b5f6, #2196f3)', // Soft blue gradient
  }
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  backgroundColor: 'rgba(255,255,255,0.1)',
  margin: theme.spacing(0.5),
  '&:hover': {
    color: '#64b5f6', // Soft blue
    transform: 'translateY(-3px) rotate(8deg)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    color: '#64b5f6', // Soft blue
    transform: 'translateX(5px)',
    transition: 'all 0.3s ease',
  },
}));

const ContactItem = ({ icon, text }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Box>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    setOpenSnackbar(true);
    setEmail('');
  };

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 2,
                  background: 'linear-gradient(45deg, #64b5f6, #2196f3)', // Matching blue gradient
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold'
                }}
              >
                PURENSO SELECT
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)' }}>
                Experience the finest fragrances crafted with passion and precision. 
                Let our scents tell your story.
              </Typography>
              
              {/* Contact Information */}
              <ContactItem 
                icon={<LocationOnIcon fontSize="small" />}
                text="104, Kamal Vihar, Dewas Naka, Indore - 452010"
              />
              <ContactItem 
                icon={<PhoneIcon fontSize="small" />}
                text="+91 9826391092"
              />
              <ContactItem 
                icon={<EmailIcon fontSize="small" />}
                text="support@purenso.in"
              />
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              LEARN MORE
            </Typography>
            <Stack spacing={2}>
              {['About Us', 'Contact Us', 'Guides', 'Recipe'].map((item) => (
                <StyledLink key={item} href="#">
                  {item}
                </StyledLink>
              ))}
            </Stack>
          </Grid>

          {/* Main Menu */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              MAIN MENU
            </Typography>
            <Stack spacing={2}>
              {['Home', 'Shop', 'FAQ', 'Blog'].map((item) => (
                <StyledLink key={item} href="#">
                  {item}
                </StyledLink>
              ))}
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
              STAY CONNECTED
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderRadius: 1,
                  input: { color: '#fff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#64b5f6' }, // Soft blue
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <Button 
                      type="submit"
                      sx={{ 
                        minWidth: 'auto',
                        background: 'linear-gradient(45deg, #64b5f6, #2196f3)', // Matching blue gradient
                        '&:hover': { 
                          background: 'linear-gradient(45deg, #2196f3, #64b5f6)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <SendIcon />
                    </Button>
                  ),
                }}
              />
            </Box>

            {/* Social Links */}
            <Stack direction="row" flexWrap="wrap">
              {[
                { icon: <FacebookIcon />, link: '#' },
                { icon: <InstagramIcon />, link: '#' },
                { icon: <TelegramIcon />, link: '#' },
                { icon: <YouTubeIcon />, link: '#' },
                { icon: <WhatsAppIcon />, link: '#' }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialButton 
                    component="a" 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </SocialButton>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              © {new Date().getFullYear()} PURENSO SELECT. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
              flexWrap="wrap"
            >
              {['Privacy Policy', 'Terms of Service', 'Shipping Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  variant="body2"
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': { color: '#64b5f6' } // Soft blue
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Thank you for subscribing to our newsletter!
        </Alert>
      </Snackbar>
    </StyledFooter>
  );
};

export default Footer;