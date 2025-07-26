import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Rating,
  Chip,
  Stack
} from '@mui/material';

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discount / 100);

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)'
    }
  };

  const imageContainerStyles = {
    position: 'relative',
    paddingTop: '133%' // 4:3 Aspect Ratio
  };

  const imageStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  const badgeStyles = {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
    display: 'flex',
    gap: 1
  };

  const chipStyles = {
    bgcolor: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600
  };

  return (
    <Card sx={cardStyles}>
      {/* Image Section with Badges */}
      <Box sx={imageContainerStyles}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={imageStyles}
        />
        {/* Badge Overlay */}
        <Box sx={badgeStyles}>
          {product.isNew && (
            <Chip 
              size="small" 
              color="secondary" 
              label="New"
              sx={chipStyles}
            />
          )}
          {product.isBestseller && (
            <Chip 
              size="small" 
              color="primary" 
              label="Bestseller"
              sx={chipStyles}
            />
          )}
        </Box>
      </Box>

      {/* Content Section */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Product Name */}
        <Typography 
          variant="h6" 
          component="h2"
          sx={{ 
            fontWeight: 600,
            fontSize: '1.1rem',
            mb: 2
          }}
        >
          {product.name}
        </Typography>

        {/* Rating */}
        <Box sx={{ mb: 2 }}>
          <Rating 
            value={product.rating} 
            precision={0.1} 
            readOnly 
            size="small" 
          />
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            ({product.rating})
          </Typography>
        </Box>

        {/* Product Details */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 2 }}
        >
          {product.gender} • {product.size} • {product.category}
        </Typography>

        {/* Price Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 2
          }}
        >
          {product.discount > 0 ? (
            <>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
              >
                ${discountedPrice.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: 'line-through' }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              <Chip 
                size="small" 
                color="error" 
                label={`-${product.discount}%`}
              />
            </>
          ) : (
            <Typography 
              variant="h6" 
              color="primary" 
              fontWeight="bold"
            >
              ${product.price.toFixed(2)}
            </Typography>
          )}
        </Box>

        {/* Footer Section */}
        <Box sx={{ mt: 'auto' }}>
          {/* Stock Status */}
          <Typography 
            variant="body2" 
            color={product.stock < 5 ? "error" : "text.secondary"}
            sx={{ mb: 1 }}
          >
            {product.stock} in stock
          </Typography>

          {/* Tags */}
          <Stack 
            direction="row" 
            spacing={0.5} 
            flexWrap="wrap" 
            gap={0.5}
          >
            {product.tags.map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                variant="outlined"
                sx={{ 
                  borderRadius: '4px',
                  height: '24px'
                }}
              />
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;