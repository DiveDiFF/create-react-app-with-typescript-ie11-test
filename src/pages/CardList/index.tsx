import { Box, Typography } from '@mui/material';
import React from 'react';

import HorizontalCardList from './HorizontalCardList';
import VerticalCardList from './VerticalCardList';

export default function CardList() {
  return (
    <Box sx={{ my: '64px' }}>
      <Typography variant="h4" component="h3" gutterBottom>
        카드리스트
      </Typography>
      <VerticalCardList />
      <HorizontalCardList />
    </Box>
  );
}
