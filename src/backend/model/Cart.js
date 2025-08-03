import mongoose, { Schema } from "mongoose";

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: [true, "Product is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [1, "Quantity must be at least 1"],
  },
});

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
    unique: true, // One cart per user
  },
  items: [CartItemSchema],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
CartSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
