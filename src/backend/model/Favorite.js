import mongoose, { Schema } from "mongoose";

const FavoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required"],
    unique: true, // One favorite list per user
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product is required"],
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamp on save
FavoriteSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", FavoriteSchema);
