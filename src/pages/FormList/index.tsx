import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function FormList() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          폼 리스트
        </Typography>
      </Box>
    </Container>
  );
}
