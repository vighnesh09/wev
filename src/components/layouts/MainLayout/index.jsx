"use client";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { Box } from "@mui/material";

export default function MainLayout({ children }) {
  return (
    <Box component="main" sx={{ minHeight: "100vh" }}>
{/* <Container maxWidth="lg"> */}
      <Navbar />
      {children}
      <Footer />
{/* </Container> */}
    </Box>
  );
}
