import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
