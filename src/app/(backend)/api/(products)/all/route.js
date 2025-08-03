import { NextResponse } from 'next/server';
import { Product } from '../../../../../backend/model/Product';
import dbConnect from '../../../../../backend/lib/mongodb';

export const POST = async (req) => {
  await dbConnect();
  const { sortBy, category, size, inStock, minRating } = await req.json(); 

  // Fetch products from database
  let filteredProducts = await Product.find();

  // Apply filters
  if (inStock === true) {
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

  return NextResponse.json({
    success: true,
    data: filteredProducts,
    filters: {
      sortBy,
      category,
      size,
      inStock,
      minRating
    }
  }, {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
}

