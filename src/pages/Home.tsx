import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          IE 10+ TEST PROJECT
        </Typography>
      </Box>
    </Container>
  );
}
