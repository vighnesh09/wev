"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Fade,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import FilterSection from "../../../components/FilterSection";
import ProductCard from "../../../components/ProductCard";
import Loader from "../../../components/Loader";
import { getAllPerfumeList } from "@/redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

export default function Shop() {
  const theme = useTheme();
  const dispatch = useDispatch(); // Add dispatch
  
  // Get products from Redux store
  const { perfumeProductsList, loading: reduxLoading } = useSelector((state) => state.shop);
  
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "",
    category: "",
    size: "",
    minRating: 0,
    inStock: false,
  });

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        await dispatch(getAllPerfumeList(filters)); // Dispatch the action
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    setMounted(true);
  }, [dispatch, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (!mounted) return null;

  return (
    <Fade in={mounted}>
      <Box sx={{ display: "flex" }}>
        <FilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2, md: 3 } }}
        >
          <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 } }}>
            {/* Breadcrumbs */}
            <Breadcrumbs sx={{ mb: 4 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Typography color="text.primary">Shop</Typography>
            </Breadcrumbs>

            {/* Header Section */}
            <Box
              textAlign="center"
              mb={8}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="overline"
                color="primary"
                sx={{
                  letterSpacing: "0.2em",
                  mb: { xs: 1, sm: 2 },
                  display: "block",
                  fontSize: { xs: "0.7rem", sm: "0.75rem" },
                }}
              >
                LUXURY COLLECTION
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                  background:
                    "linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.2,
                }}
              >
                Our Perfumes
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  mb: { xs: 3, sm: 4 },
                  maxWidth: "600px",
                  mx: "auto",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
                  px: { xs: 2, sm: 0 },
                }}
              >
                Discover our exclusive collection of luxury fragrances, crafted
                with passion and precision
              </Typography>
              <Divider
                sx={{
                  width: "60px",
                  margin: "0 auto",
                  borderColor: "primary.main",
                  borderWidth: 2,
                }}
              />
            </Box>

            {/* Products Grid */}
            {loading && <Loader />}
            <Grid
              container
              spacing={{ xs: 1.5, sm: 2, md: 3 }}
              sx={{
                mt: { xs: 2, sm: 4 },
                width: "100%",
                margin: "0 auto",
                px: { xs: 1, sm: 0 },
                alignItems: "stretch", // Ensure all grid items stretch to equal height
              }}
            >
              {perfumeProductsList && perfumeProductsList.length > 0 ? (
                perfumeProductsList.map((product, index) => (
                  <Grid
                    item
                    xs={6} // 2 products per row on mobile
                    sm={6} // 2 products per row on small tablets
                    md={4} // 3 products per row on medium screens
                    lg={3} // 4 products per row on large screens
                    key={product.id}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    sx={{
                      display: "flex",
                      "& > *": {
                        width: "100%",
                        height: "100%", // Ensure all cards stretch to full height
                      },
                    }}
                  >
                    <ProductCard product={product} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Box
                    textAlign="center"
                    py={8}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Typography variant="h6" color="text.secondary">
                      {loading || reduxLoading ? "Loading..." : "No products found"}
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
      </Box>
    </Fade>
  );
}
