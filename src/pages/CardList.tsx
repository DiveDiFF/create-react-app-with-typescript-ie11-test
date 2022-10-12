import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function CardList() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          카드리스트
        </Typography>
      </Box>
    </Container>
  );
}
