import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

import HorizontalCard from '../../components/Common/Card/HorizontalCard';
import VerticalCard from '../../components/Common/Card/VerticalCard';

export default function CardList() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        카드리스트
      </Typography>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {Array(8)
          .fill("")
          .map((item, index) => (
            <ListItem sx={{ maxWidth: "308px", padding: "4px" }} key={index}>
              <VerticalCard />
            </ListItem>
          ))}
      </List>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {Array(8)
          .fill("")
          .map((item, index) => (
            <ListItem sx={{ maxWidth: "508px", padding: "4px" }} key={index}>
              <HorizontalCard />
            </ListItem>
          ))}
      </List>
    </Box>
  );
}
