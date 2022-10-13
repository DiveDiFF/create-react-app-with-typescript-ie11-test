import { Box, Card, CardContent, CardMedia, Divider, Rating, Typography } from '@mui/material';
import React from 'react';

import { EllipsisTypography } from '../../Typography/EllipsisTypography';

export default function VerticalCard() {
  return (
    <Card sx={{ width: "100%", maxWidth: "300px" }}>
      <CardMedia
        component="img"
        image="https://picsum.photos/300/300"
        sx={{ maxWidth: "300px", height: "auto" }}
      />
      <CardContent
        sx={{
          padding: 0,
          "&:last-child": { paddingBottom: 0 },
          backgroundColor: "#f6f6f6",
        }}
      >
        <Box sx={{ padding: "16px", height: "125px" }}>
          <Box sx={{ marginBottom: "16px" }}>
            <Typography variant="caption" color="grey.500">
              Card Label
            </Typography>
            <EllipsisTypography variant="h6">Card Title</EllipsisTypography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography color="error.main" sx={{ marginRight: "8px" }}>
              Hilight
            </Typography>
            <Typography
              variant="caption"
              color="grey.500"
              sx={{ textDecoration: "line-through" }}
            >
              Cross out
            </Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ padding: "16px", height: "87px" }}>
          <Rating value={4} />
          <EllipsisTypography color="grey.500" sx={{ marginRight: "16px" }}>
            description descr iptiondescr iptionde scriptiondesc ription
          </EllipsisTypography>
        </Box>
      </CardContent>
    </Card>
  );
}
