import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { MenuBox } from './styles';

export default function Home() {
  return (
    <Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          IDUS front-end developer test
        </Typography>
      </Box>
      <Box sx={{ marginTop: "40px" }}>
        <Link href="/card_list" underline="none">
          <MenuBox>1. 카드 리스트</MenuBox>
        </Link>
        <Box>
          <Link href="/form_list" underline="none">
            <MenuBox>2. 폼 리스트</MenuBox>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
