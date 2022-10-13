import { Box, Typography } from '@mui/material';
import React from 'react';

import HorizontalCard from '../../components/Common/Card/HorizontalCard';
import VerticalCard from '../../components/Common/Card/VerticalCard';

export default function CardList() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        카드리스트
      </Typography>
      <VerticalCard />
      <HorizontalCard />
    </Box>
  );
}
