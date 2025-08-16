import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Rating,
  Chip,
  Stack,
  IconButton,
  Tooltip,
  alpha,
  useTheme,
  useMediaQuery
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const discountedPrice = product.price * (1 - product.discount / 100);

  // Mobile-specific card styles - completely different layout
  const mobileCardStyles = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row', // Horizontal layout for mobile
    position: 'relative',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    border: '1px solid rgba(0,0,0,0.06)',
    mb: 2,
    '&:hover': {
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
      '& .mobile-image': {
        transform: 'scale(1.05)'
      }
    }
  };

  // Desktop card styles - original layout
  const desktopCardStyles = {
    width: { md: 300, sm: 250 },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#fff',
    boxShadow: theme.shadows[1],
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[8],
      '& .product-image': {
        transform: 'scale(1.05)'
      },
      '& .product-actions': {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  };

  const cardStyles = isMobile ? mobileCardStyles : desktopCardStyles;

  const imageContainerStyles = {
    position: 'relative',
    width: '100%',
    paddingTop: '100%', // 1:1 Aspect ratio
    backgroundColor: alpha(theme.palette.common.black, 0.02),
    overflow: 'hidden'
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const badgeStyles = {
    position: 'absolute',
    top: isMobile ? 8 : 12,
    left: isMobile ? 8 : 12,
    zIndex: 1,
    display: 'flex',
    gap: 0.5,
    flexWrap: 'wrap',
    maxWidth: '70%'
  };

  const actionsStyles = {
    position: 'absolute',
    right: isMobile ? 8 : 12,
    top: isMobile ? 8 : 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    opacity: isMobile ? 1 : 0,
    transform: 'translateY(0)',
    transition: 'all 0.3s ease-in-out',
    zIndex: 2,
  };

  const contentStyles = {
    flexGrow: 1,
    padding: { xs: theme.spacing(1.5), sm: theme.spacing(2) },
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: { xs: theme.spacing(1.5), sm: theme.spacing(2) }
    }
  };

  return (
    <Card 
      sx={cardStyles}
      component={motion.div}
      whileHover={{ y: isMobile ? 0 : -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image Section */}
      <Box sx={imageContainerStyles}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={imageStyles}
          className="product-image"
        />
        {/* Badges */}
        <Box sx={badgeStyles}>
          {product.isNew && (
            <Chip 
              size="small" 
              color="secondary" 
              label="New"
              sx={{ 
                bgcolor: 'secondary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '0.65rem', sm: '0.75rem' },
                height: { xs: 20, sm: 24 }
              }}
            />
          )}
          {product.isBestseller && (
            <Chip 
              size="small" 
              color="primary" 
              label="Bestseller"
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '0.65rem', sm: '0.75rem' },
                height: { xs: 20, sm: 24 }
              }}
            />
          )}
        </Box>
        {/* Quick Actions */}
        <Box sx={actionsStyles} className="product-actions">
          <Tooltip title={isMobile ? '' : 'Add to Wishlist'}>
            <IconButton 
              size={isMobile ? 'small' : 'small'}
              sx={{ 
                bgcolor: 'white',
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                boxShadow: 1,
                '&:hover': { 
                  bgcolor: 'white',
                  transform: 'scale(1.1)' 
                }
              }}
            >
              <FavoriteIcon fontSize={isMobile ? 'small' : 'small'} />
            </IconButton>
          </Tooltip>
          <Tooltip title={isMobile ? '' : 'Add to Cart'}>
            <IconButton 
              size={isMobile ? 'small' : 'small'}
              sx={{ 
                bgcolor: 'white',
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                boxShadow: 1,
                '&:hover': { 
                  bgcolor: 'white',
                  transform: 'scale(1.1)' 
                }
              }}
            >
              <ShoppingCartIcon fontSize={isMobile ? 'small' : 'small'} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Content Section */}
      <CardContent sx={contentStyles}>
        <Typography 
          variant="h6"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
            fontWeight: 600,
            mb: { xs: 0.5, sm: 1 },
            height: { xs: '2.2em', sm: '2.4em' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.2
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ mb: { xs: 1, sm: 1.5 } }}>
          <Rating 
            value={product.rating} 
            precision={0.5} 
            size={isMobile ? 'small' : 'small'}
            readOnly 
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem' }
            }}
          />
        </Box>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: { xs: 1.5, sm: 2 }, 
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            lineHeight: 1.2
          }}
        >
          {product.category} • {product.size}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: { xs: 0.5, sm: 1 }
          }}>
            <Typography 
              variant="h6" 
              color="primary.main"
              sx={{ 
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              ₹{product.price.toFixed(2)}
            </Typography>
            {product.discount > 0 && (
              <Chip 
                size="small" 
                color="error" 
                label={`-${product.discount}%`}
                sx={{
                  fontSize: { xs: '0.65rem', sm: '0.75rem' },
                  height: { xs: 20, sm: 24 }
                }}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;