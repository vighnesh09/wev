import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  Rating,
  Divider,
  Button,
  Chip,
  Stack,
  Tooltip,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import CategoryIcon from '@mui/icons-material/Category';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import StarIcon from '@mui/icons-material/Star';
import InventoryIcon from '@mui/icons-material/Inventory';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const FilterSection = ({ filters, onFilterChange, mobileOpen, setMobileOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tempFilters, setTempFilters] = useState({ ...filters });

  const categories = [
    'Floral-Oriental',
    'Fresh',
    'Floral',
    'Citrus',
    'Oriental',
    'Gourmand',
    'Green',
    'Leather',
    'Amber',
    'Herbal',
    'Woody'
  ];

  const sizes = ['50ml', '75ml', '100ml'];

  const handleFilterChange = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: value
    };
    onFilterChange(newFilters);
  };

  const handleTempFilterChange = (type, value) => {
    setTempFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(tempFilters);
    setMobileOpen(false);
  };

  const handleClearFilters = () => {
    onFilterChange({
      sortBy: '',
      category: '',
      size: '',
      minRating: 0,
      inStock: false
    });
  };

  const handleCancel = () => {
    setTempFilters({ ...filters });
    setMobileOpen(false);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.sortBy) count++;
    if (filters.category) count++;
    if (filters.size) count++;
    if (filters.minRating) count++;
    if (filters.inStock) count++;
    return count;
  };

  const filterContent = (isMobileView) => (
    <Box sx={{ p: 3, width: isMobileView ? '100%' : 250 }}>
      {/* Add header with clear button for desktop */}
      {!isMobileView && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 3
        }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Filters
            {Object.values(filters).some(v => v !== '' && v !== false && v !== 0) && (
              <Chip
                size="small"
                label={Object.values(filters).filter(v => v !== '' && v !== false && v !== 0).length}
                color="primary"
                sx={{ ml: 1 }}
              />
            )}
          </Typography>
          {Object.values(filters).some(v => v !== '' && v !== false && v !== 0) && (
            <Tooltip title="Clear all filters">
              <IconButton 
                onClick={handleClearFilters} 
                size="small"
                color="primary"
              >
                <RestartAltIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      )}

      <Stack spacing={3}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <SortIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle1" fontWeight={500}>Sort By</Typography>
          </Box>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={isMobileView ? tempFilters.sortBy : filters.sortBy}
              onChange={(e) => isMobileView 
                ? handleTempFilterChange('sortBy', e.target.value)
                : handleFilterChange('sortBy', e.target.value)
              }
            >
              <FormControlLabel value="price-low" control={<Radio size="small" />} label="Price: Low to High" />
              <FormControlLabel value="price-high" control={<Radio size="small" />} label="Price: High to Low" />
              <FormControlLabel value="rating" control={<Radio size="small" />} label="Highest Rated" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Divider />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CategoryIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle1" fontWeight={500}>Category</Typography>
          </Box>
          <FormControl fullWidth size="small">
            <Select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              displayEmpty
              sx={{ '& .MuiSelect-select': { py: 1 } }}
            >
              <MenuItem value="">All Categories</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Divider />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocalDrinkIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle1" fontWeight={500}>Size</Typography>
          </Box>
          <FormControl fullWidth size="small">
            <Select
              value={filters.size}
              onChange={(e) => handleFilterChange('size', e.target.value)}
              displayEmpty
              sx={{ '& .MuiSelect-select': { py: 1 } }}
            >
              <MenuItem value="">All Sizes</MenuItem>
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>{size}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Divider />

        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <StarIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle1" fontWeight={500}>Minimum Rating</Typography>
          </Box>
          <Rating
            value={filters.minRating}
            onChange={(event, newValue) => {
              handleFilterChange('minRating', newValue);
            }}
            precision={0.5}
            sx={{ '& .MuiRating-icon': { fontSize: '1.2rem' } }}
          />
        </Box>

        <Divider />

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={isMobileView ? tempFilters.inStock : filters.inStock}
                onChange={(e) => isMobileView 
                  ? handleTempFilterChange('inStock', e.target.checked)
                  : handleFilterChange('inStock', e.target.checked)
                }
                size="small"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InventoryIcon 
                  sx={{ 
                    mr: 1, 
                    color: (isMobileView ? tempFilters.inStock : filters.inStock) 
                      ? 'primary.main' 
                      : 'text.secondary'
                  }} 
                />
                <Typography variant="subtitle1" fontWeight={500}>
                  In Stock Only
                </Typography>
              </Box>
            }
          />
        </Box>
      </Stack>
    </Box>
  );

  const mobileFilterDialog = (
    <Dialog
      fullScreen
      open={mobileOpen}
      onClose={handleCancel}
      sx={{
        '& .MuiDialog-paper': {
          bgcolor: 'background.default'
        }
      }}
    >
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleCancel}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              ml: 2, 
              flex: 1,
              color: 'text.primary'
            }}
          >
            Filters
            {Object.values(tempFilters).some(v => v !== '' && v !== false && v !== 0) && (
              <Chip
                size="small"
                label={Object.values(tempFilters).filter(v => v !== '' && v !== false && v !== 0).length}
                color="primary"
                sx={{ ml: 1 }}
              />
            )}
          </Typography>
          <Button 
            color="inherit" 
            onClick={() => {
              setTempFilters({
                sortBy: '',
                category: '',
                size: '',
                minRating: 0,
                inStock: false
              });
            }}
            sx={{ color: 'primary.main' }}
          >
            Clear All
          </Button>
        </Toolbar>
      </AppBar>

      <DialogContent sx={{ pb: 10 }}>
        {filterContent(true)}
      </DialogContent>

      <AppBar 
        position="fixed" 
        color="default" 
        sx={{ 
          top: 'auto', 
          bottom: 0,
          bgcolor: 'background.paper'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{ width: '48%' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleApplyFilters}
            sx={{ width: '48%' }}
          >
            Apply Filters
          </Button>
        </Toolbar>
      </AppBar>
    </Dialog>
  );

  const mobileTrigger = (
    <Box sx={{ 
      position: 'fixed',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      display: 'flex',
      gap: 1,
      alignItems: 'center'
    }}>
      {/* Clear button - only shows when filters are active */}
      {Object.values(filters).some(v => v !== '' && v !== false && v !== 0) && (
        <IconButton
          onClick={handleClearFilters}
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            '&:hover': { bgcolor: 'background.paper' },
            width: 40,
            height: 40
          }}
          size="small"
        >
          <RestartAltIcon />
        </IconButton>
      )}
      
      {/* Main filter button */}
      <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={() => setMobileOpen(true)}
        sx={{
          borderRadius: 5,
          px: 4,
          py: 1.5,
          boxShadow: 3
        }}
      >
        Filters
        {Object.values(filters).some(v => v !== '' && v !== false && v !== 0) && (
          <Chip
            size="small"
            label={Object.values(filters).filter(v => v !== '' && v !== false && v !== 0).length}
            color="error"
            sx={{ ml: 1 }}
          />
        )}
      </Button>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          {mobileTrigger}
          {mobileFilterDialog}
        </>
      ) : (
        <Box sx={{ 
          width: 280,
          flexShrink: 0,
          borderRight: `1px solid ${theme.palette.divider}`,
          height: '100vh',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 1
        }}>
          {filterContent(false)} {/* Call the function with false for desktop view */}
        </Box>
      )}
    </>
  );
};

export default FilterSection;