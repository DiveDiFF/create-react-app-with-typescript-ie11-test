import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Layout from './Layout';
import Router from './router';
import theme from './styles/theme';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Layout>
      <Router />
    </Layout>
  </ThemeProvider>
);
