import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const fillAnimation = keyframes`
  0% { height: 0; opacity: 0.7; }
  100% { height: 80%; opacity: 1; }
`;

const bubbleAnimation = keyframes`
  0% { transform: translateY(0) scale(0.6); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-60px) scale(0.3); opacity: 0; }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Loader = () => (
  <Box sx={{
    position: 'fixed', inset: 0,
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
    zIndex: 9999,
  }}>
    {/* Wrapper for bottle + nozzle */}
    <Box sx={{ position: 'relative', width: 80, height: 190 /* taller to fit nozzle */ }}>
      {/* Nozzle - positioned relative to wrapper, so no clipping */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 40,
        height: 20,
        background: 'linear-gradient(135deg, #1565c0, #0d47a1)',
        borderRadius: '8px 8px 4px 4px',
        border: '2px solid #0d47a1',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        zIndex: 3,
      }} />

      {/* Bottle container */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        width: 80,
        height: 160,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.8), rgba(220,220,220,0.4))',
        borderRadius: '35% 35% 45% 45% / 40% 40% 60% 60%',
        border: '3px solid #1976d2', overflow: 'hidden',
        boxShadow: '0 0 8px rgba(0,0,0,0.15)',
        '&::before': {
          content: '""',
          position: 'absolute', top: -25, left: '50%',
          transform: 'translateX(-50%)',
          width: 24, height: 24,
          background: '#fff', border: '3px solid #1976d2',
          borderBottom: 'none', borderRadius: '6px 6px 0 0',
          zIndex: 1,
        },
        '&::after': {
          content: '""',
          position: 'absolute', top: -45, left: '50%',
          transform: 'translateX(-50%)',
          width: 60, height: 28,
          background: 'linear-gradient(145deg, #1976d2, #1565c0)',
          border: '2px solid #0d47a1',
          borderRadius: '12px 12px 8px 8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
          zIndex: 2,
          backgroundSize: '200% 100%',
          animation: `${shimmer} 2s linear infinite`,
        },
      }}>
        {/* Liquid Fill */}
        <Box sx={{
          position: 'absolute', bottom: 0, left: 0, width: '100%',
          background: 'linear-gradient(to top, #1976d2, #42a5f5)',
          animation: `${fillAnimation} 2s ease-in-out infinite alternate`,
        }} />

        {/* Bubbles */}
        {[...Array(4)].map((_, i) => (
          <Box key={i} sx={{
            position: 'absolute',
            bottom: 20 + i * 10,
            left: 15 + i * 12,
            width: 8 + i * 2,
            height: 8 + i * 2,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: '50%',
            animation: `${bubbleAnimation} ${1.8 + i * 0.3}s ease-in-out infinite`,
            animationDelay: `${i * 0.25}s`,
          }} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default Loader;
