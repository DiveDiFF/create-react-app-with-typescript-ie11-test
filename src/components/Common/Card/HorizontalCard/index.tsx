import { Box, Card, CardContent, CardMedia, Rating } from '@mui/material';
import React from 'react';

import { EllipsisTypography } from '../../Typography/EllipsisTypography';

export default function HorizontalCard() {
  return (
    <Card sx={{ width: "100%", display: "flex", maxWidth: "500px" }}>
      <CardMedia
        component="img"
        image="https://picsum.photos/300/300"
        sx={{ height: "auto", maxWidth: "200px", width: "100%" }}
      />
      <CardContent
        sx={{
          padding: "16px",
          "&:last-child": { paddingBottom: 0 },
          backgroundColor: "#f6f6f6",
          height: "auto",
        }}
      >
        <Box sx={{ marginBottom: "16px" }}>
          <Box sx={{ marginBottom: "16px" }}>
            <EllipsisTypography variant="h6">Card Title</EllipsisTypography>
          </Box>
          <Box sx={{ height: "72px", overflowY: "hidden" }}>
            <EllipsisTypography
              color="grey.500"
              lineNumber={3}
              sx={{ marginRight: "16px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </EllipsisTypography>
          </Box>
        </Box>
        <Box>
          <Rating value={4} />
        </Box>
      </CardContent>
    </Card>
  );
}
