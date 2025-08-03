import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  stock: {
    type: Number,
    required: [true, "Stock quantity is required"],
    min: [0, "Stock cannot be negative"],
  },
  images: [
    {
      type: String, // Cloudinary image URLs
      required: [true, "At least one image is required"],
    },
  ],
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: ["Fragrance", "Perfume", "Eau de Toilette", "Other"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
