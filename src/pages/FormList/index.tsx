import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function FormList() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: '64px' }}>
        <Typography variant="h4" component="h3" gutterBottom>
          폼 리스트
        </Typography>
      </Box>
    </Container>
  );
}
