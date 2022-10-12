import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function FormList() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          폼 아이템
        </Typography>
      </Box>
    </Container>
  );
}
