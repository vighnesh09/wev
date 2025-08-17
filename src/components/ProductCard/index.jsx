import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  const discountedPrice = product.price * (1 - product.discount / 100);

  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category} • {product.size}
        </Typography>
        <Typography variant="h6" color="primary">
          ₹{discountedPrice.toFixed(2)}
        </Typography>
        {product.discount > 0 && (
          <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
            ₹{product.price.toFixed(2)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;