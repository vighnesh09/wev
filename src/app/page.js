"use client";
import { Container, Box } from "@mui/material";
import Hero from "./_homesection/hero/page";
import Products from "./_homesection/products/page";
import GiftSection from "./_homesection/gift/page";
import PromiseSection from "./_homesection/promises/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products/>
      <GiftSection/>  
      <PromiseSection/>
    </>
  );
}
