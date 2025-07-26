'use client';
import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  Menu, 
  MenuItem, 
  Stack,
  styled,
  IconButton,
  InputBase,
  Badge,
  alpha,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@mui/material';

// Custom styled components
const StickyNav = styled(Box)(({ theme, 'data-visible': visible }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
  zIndex: theme.zIndex.appBar,
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  transform: visible ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'transform 0.3s ease-in-out'
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: theme.palette.text.primary,
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  padding: '6px 12px',
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.04),
    '&::after': {
      width: '80%',
      opacity: 1,
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 6,
    left: '10%',
    width: active ? '80%' : '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    opacity: active ? 1 : 0,
    transition: 'all 0.3s ease'
  }
}));

// Add new styled components for search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.07),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  transition: 'all 0.3s ease',
  border: `1px solid ${alpha(theme.palette.common.black, 0.06)}`,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// Modify mobile drawer styles
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 280,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    '& .MuiList-root': {
      '& .MuiListItem-root': {
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(1),
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
        },
      },
    },
  },
}));

const navItems = [
  {
    label: 'Home',
    path: '/',
    items: []
  },
  {
    label: 'Shop',
    path: '/shop',
    items: [
      // { label: 'All Products', path: '/shop/all' },
      // { label: 'New Arrivals', path: '/shop/new' },
      // { label: 'Best Sellers', path: '/shop/best-sellers' },
      // { label: 'Sale', path: '/shop/sale' }
    ]
  },
  {
    label: 'Guides',
    path: '/guides',
    items: [
      // { label: 'Size Guide', path: '/guides/size' },
      // { label: 'Care Instructions', path: '/guides/care' }
    ]
  },
  {
    label: 'Recipe',
    path: '/recipe',
    items: [
      // { label: 'Latest Recipes', path: '/recipe/latest' },
      // { label: 'Popular Recipes', path: '/recipe/popular' },
      // { label: 'Categories', path: '/recipe/categories' }
    ]
  },
  {
    label: 'FAQ',
    path: '/faq',
    items: []
  }
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileDrawer = (
    <Box sx={{ width: 280 }} role="presentation">
      <Stack direction="row" spacing={2} sx={{ mb: 4, px: 2 }}>
        <Search sx={{ flex: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            fullWidth
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Stack>
      
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.label} 
            component={Link} 
            href={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: pathname === item.path ? 'primary.main' : 'text.primary',
              py: 1.5,
              px: 2,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: pathname === item.path ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StickyNav data-visible={visible}>
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          spacing={2} 
          alignItems="center" 
          justifyContent="space-between"
          sx={{ 
            py: 2,
          }}
        >
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 1,
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop navigation */}
          {!isMobile && (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item) => (
                <Box key={item.label}>
                  <NavButton
                    component={Link}
                    href={item.path}
                    active={pathname === item.path ? 1 : 0}
                    onMouseEnter={(e) => item.items.length > 0 && handleMenuOpen(e, item.label)}
                  >
                    {item.label}
                  </NavButton>
                  {item.items.length > 0 && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === item.label}
                      onClose={handleMenuClose}
                      MenuListProps={{ 
                        onMouseLeave: handleMenuClose,
                        sx: { py: 0 }
                      }}
                      sx={{
                        '& .MuiPaper-root': {
                          mt: 1,
                          minWidth: 180
                        }
                      }}
                    >
                      {item.items.map((subItem) => (
                        <MenuItem 
                          key={subItem.path}
                          component={Link}
                          href={subItem.path}
                          onClick={handleMenuClose}
                          sx={{ py: 1.5 }}
                        >
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Stack>
          )}

          {/* Right side icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            {!isMobile && (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            )}
            
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
            >
              <PersonIcon />
            </IconButton>
            
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
            >
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            
            <IconButton 
              color="inherit"
              sx={{ '&:hover': { backgroundColor: 'action.hover' } }}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        </Stack>
      </Container>

      {/* Mobile drawer */}
      <StyledDrawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {mobileDrawer}
      </StyledDrawer>
    </StickyNav>
  );
};

export default Navbar;