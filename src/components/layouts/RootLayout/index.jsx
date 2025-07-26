'use client';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../../styles/theme';
import { Providers } from '../../common/Providers';

export default function RootLayout({ children }) {
  return (
    <AppRouterCacheProvider>
      <Providers>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </Providers>
    </AppRouterCacheProvider>
  );
}