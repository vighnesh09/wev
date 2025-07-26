const express = require('express');
const router = express.Router();

const perfumeProducts = [
  {
    id: 1,
    name: "Velvet Bloom",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=987&auto=format&fit=crop",
    gender: "Unisex",
    size: "100ml",
    rating: 4.7,
    category: "Floral‑Oriental",
    isBestseller: true,
    isNew: false,
    stock: 20,
    discount: 10,
    tags: ["Elegant", "Evening", "Warm"],
    sku: "VB100UX",
  },
  {
    id: 2,
    name: "Ocean Whisper",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=987&auto=format&fit=crop",
    gender: "Men",
    size: "100ml",
    rating: 4.3,
    category: "Fresh",
    isBestseller: false,
    isNew: true,
    stock: 5,
    discount: 0,
    tags: ["Sporty", "Daytime", "Citrus"],
    sku: "OW100M",
  },
  {
    id: 3,
    name: "Rose Veil",
    price: 95.50,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=987&auto=format&fit=crop",
    gender: "Women",
    size: "50ml",
    rating: 4.6,
    category: "Floral",
    isBestseller: true,
    isNew: false,
    stock: 12,
    discount: 5,
    tags: ["Romantic", "Classy", "Soft"],
    sku: "RV050W",
  },
  {
    id: 4,
    name: "Citrus Muse",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=987&auto=format&fit=crop",
    gender: "Unisex",
    size: "75ml",
    rating: 4.2,
    category: "Citrus",
    isBestseller: false,
    isNew: true,
    stock: 8,
    discount: 0,
    tags: ["Fresh", "Daytime", "Energizing"],
    sku: "CM075UX",
  },
  {
    id: 5,
    name: "Spice Odyssey",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1579621970795-87facc68f1c3?q=80&w=987&auto=format&fit=crop",
    gender: "Men",
    size: "100ml",
    rating: 4.8,
    category: "Oriental",
    isBestseller: true,
    isNew: false,
    stock: 15,
    discount: 15,
    tags: ["Bold", "Warm", "Evening"],
    sku: "SO100M",
  },
  {
    id: 6,
    name: "Vanilla Dusk",
    price: 82.99,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=987&auto=format&fit=crop",
    gender: "Women",
    size: "100ml",
    rating: 4.4,
    category: "Gourmand",
    isBestseller: false,
    isNew: true,
    stock: 10,
    discount: 0,
    tags: ["Sweet", "Cozy", "Date‑night"],
    sku: "VD100W",
  },
  {
    id: 7,
    name: "Green Serenity",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=987&auto=format&fit=crop",
    gender: "Unisex",
    size: "75ml",
    rating: 4.1,
    category: "Green",
    isBestseller: false,
    isNew: false,
    stock: 18,
    discount: 5,
    tags: ["Fresh", "Natural", "Daytime"],
    sku: "GS075UX",
  },
  {
    id: 8,
    name: "Leather Noir",
    price: 110.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=987&auto=format&fit=crop",
    gender: "Men",
    size: "100ml",
    rating: 4.5,
    category: "Leather",
    isBestseller: true,
    isNew: false,
    stock: 7,
    discount: 10,
    tags: ["Rich", "Evening", "Masculine"],
    sku: "LN100M",
  },
  {
    id: 9,
    name: "Amber Glow",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?q=80&w=987&auto=format&fit=crop",
    gender: "Women",
    size: "100ml",
    rating: 4.6,
    category: "Amber",
    isBestseller: false,
    isNew: false,
    stock: 11,
    discount: 8,
    tags: ["Warm", "Oriental", "Sophisticated"],
    sku: "AG100W",
  },
  {
    id: 10,
    name: "Fresh Mint",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=987&auto=format&fit=crop",
    gender: "Unisex",
    size: "50ml",
    rating: 4.0,
    category: "Herbal",
    isBestseller: false,
    isNew: true,
    stock: 20,
    discount: 0,
    tags: ["Crisp", "Cooling", "Daytime"],
    sku: "FM050UX",
  },
  {
    id: 11,
    name: "Jasmine Whisper",
    price: 88.00,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=987&auto=format&fit=crop",
    gender: "Women",
    size: "75ml",
    rating: 4.3,
    category: "Floral",
    isBestseller: false,
    isNew: true,
    stock: 9,
    discount: 0,
    tags: ["Light", "Romantic", "Daytime"],
    sku: "JW075W",
  },
  {
    id: 12,
    name: "Spiced Orange",
    price: 79.50,
    image: "https://images.unsplash.com/photo-1514516871994-25417850ca2d?q=80&w=987&auto=format&fit=crop",
    gender: "Unisex",
    size: "100ml",
    rating: 4.4,
    category: "Citrus‑Spice",
    isBestseller: true,
    isNew: false,
    stock: 13,
    discount: 12,
    tags: ["Warm", "Citrus", "Evening"],
    sku: "SO100UX",
  },
  {
    id: 13,
    name: "Midnight Orchid",
    price: 130.00,
    image: "https://images.unsplash.com/photo-1532634726-35e1f2b41682?q=80&w=987&auto=format&fit=crop",
    gender: "Women",
    size: "100ml",
    rating: 4.9,
    category: "Floral‑Oriental",
    isBestseller: true,
    isNew: false,
    stock: 6,
    discount: 20,
    tags: ["Luxurious", "Evening", "Mysterious"],
    sku: "MO100W",
  },
  {
    id: 14,
    name: "Cedar Drift",
    price: 92.00,
    image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=987&auto=format&fit=crop",
    gender: "Men",
    size: "75ml",
    rating: 4.5,
    category: "Woody",
    isBestseller: false,
    isNew: true,
    stock: 14,
    discount: 0,
    tags: ["Woodsy", "Elegant", "Day‑to‑Night"],
    sku: "CD075M",
  },
];



router.post('/allPerfumeProducts', (req, res) => {
  const { 
    sortBy, 
    category, 
    size, 
    inStock,
    minRating 
  } = req.body; // Changed from req.query to req.body

  let filteredProducts = [...perfumeProducts];

  // Apply filters
  if (inStock === true) { // Changed from 'true' string to boolean
    filteredProducts = filteredProducts.filter(product => product.stock > 0);
  }

  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  if (size) {
    filteredProducts = filteredProducts.filter(product => product.size === size);
  }

  if (minRating) {
    filteredProducts = filteredProducts.filter(product => product.rating >= Number(minRating));
  }

  // Apply sorting
  if (sortBy) {
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  
  res.json({
    success: true,
    data: filteredProducts,
    filters: {
      sortBy,
      category,
      size,
      inStock,
      minRating
    }
  });
});

// Add OPTIONS handler for CORS
router.options('/allPerfumeProducts', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});
  
module.exports = router;