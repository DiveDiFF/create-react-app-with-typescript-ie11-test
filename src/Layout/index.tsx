import { Container } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="lg">
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
