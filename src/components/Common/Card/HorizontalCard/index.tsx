import { Box, Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';

import { HorizontalCardData } from '../../../../typings/cards';
import { EllipsisTypography } from '../../Typography/EllipsisTypography';

type HorizontalCardProps = {
  cardData: HorizontalCardData;
};
export default function HorizontalCard({ cardData }: HorizontalCardProps) {
  const { id, thumbnailURL, title, description, rating, writer } = cardData;
  return (
    <Card sx={{ width: '100%', display: 'flex', maxWidth: '500px' }}>
      <CardMedia
        component="img"
        image={thumbnailURL}
        sx={{ height: 'auto', maxWidth: '200px', width: '100%' }}
      />
      <CardContent
        sx={{
          padding: '16px',
          '&:last-child': { paddingBottom: 0 },
          backgroundColor: '#f6f6f6',
          height: 'auto',
        }}
      >
        <Box sx={{ marginBottom: '16px' }}>
          <Box sx={{ marginBottom: '16px' }}>
            <EllipsisTypography variant="h6">{title}</EllipsisTypography>
          </Box>
          <Box sx={{ height: '72px', overflowY: 'hidden' }}>
            <EllipsisTypography color="grey.500" lineNumber={3} sx={{ marginRight: '16px' }}>
              {description}
            </EllipsisTypography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating value={rating} />
          <Typography color="grey.400" sx={{ marginLeft: '8px' }}>
            | {writer}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
