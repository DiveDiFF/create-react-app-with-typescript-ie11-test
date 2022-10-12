import { Home as HomeIcon } from '@mui/icons-material';
import { Link, Typography } from '@mui/material';
import React from 'react';

import { HeaderBox } from './styles';

export default function Header() {
  return (
    <HeaderBox>
      <Link
        href="/"
        underline="none"
        sx={{ display: "flex", alignItems: "center", color: "grey.700" }}
      >
        <HomeIcon color="inherit" sx={{ marginRight: "8px" }} />
        <Typography color="inherit" variant="subtitle1">
          HOME
        </Typography>
      </Link>
    </HeaderBox>
  );
}
