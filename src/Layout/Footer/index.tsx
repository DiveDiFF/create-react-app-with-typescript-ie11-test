import { Typography } from '@mui/material';
import React from 'react';

import { FooterBox } from './styles';

export default function Footer() {
  return (
    <FooterBox>
      <Typography variant="caption" color="grey.700">
        2022 IDUS frontend developer test - Danny Yun
      </Typography>
    </FooterBox>
  );
}
