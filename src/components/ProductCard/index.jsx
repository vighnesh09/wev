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
  const discountedPrice = product.price * (1 - product.discount / 100);

  const cardStyles = {
    width: {md: 300, xs: '100%'},
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#fff',
    '&:hover': {
      transform: isMobile ? 'none' : 'translateY(-8px)',
      boxShadow: theme.shadows[8],
      '& .product-image': {
        transform: 'scale(1.05)'
      }
    }
  };

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
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    '&:last-child': {
      paddingBottom: theme.spacing(2)
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
                fontWeight: 600
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
                fontWeight: 600
              }}
            />
          )}
        </Box>
        {/* Quick Actions */}
        <Box sx={actionsStyles} className="product-actions">
          <Tooltip title="Add to Wishlist">
            <IconButton 
              size="small"
              sx={{ 
                bgcolor: 'white',
                '&:hover': { bgcolor: 'white' }
              }}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add to Cart">
            <IconButton 
              size="small"
              sx={{ 
                bgcolor: 'white',
                '&:hover': { bgcolor: 'white' }
              }}
            >
              <ShoppingCartIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Content Section */}
      <CardContent sx={contentStyles}>
        <Typography 
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            fontWeight: 600,
            mb: 1,
            height: '2.4em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ mb: 1.5 }}>
          <Rating 
            value={product.rating} 
            precision={0.5} 
            size="small" 
            readOnly 
          />
        </Box>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mb: 2, fontSize: '0.875rem' }}
        >
          {product.category} • {product.size}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Typography 
              variant="h6" 
              color="primary.main"
              sx={{ fontWeight: 600 }}
            >
              ₹{product.price.toFixed(2)}
            </Typography>
            {product.discount > 0 && (
              <Chip 
                size="small" 
                color="error" 
                label={`-${product.discount}%`}
              />
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;