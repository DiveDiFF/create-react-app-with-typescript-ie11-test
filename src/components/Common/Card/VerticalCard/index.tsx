import { Box, Card, CardContent, CardMedia, Divider, Rating, Typography } from '@mui/material';
import React from 'react';

import { VerticalCardData } from '../../../../typings/cards';
import { EllipsisTypography } from '../../Typography/EllipsisTypography';

type VerticalCardProps = {
  cardData: VerticalCardData;
};

export default function VerticalCard({ cardData }: VerticalCardProps) {
  const { id, thumbnailURL, title, label, originValue, hilightValue, ratingDesc, rating } =
    cardData;
  return (
    <Card sx={{ width: '100%', maxWidth: '300px' }}>
      <CardMedia component="img" image={thumbnailURL} sx={{ maxWidth: '300px', height: 'auto' }} />
      <CardContent
        sx={{
          padding: 0,
          '&:last-child': { paddingBottom: 0 },
          backgroundColor: '#f6f6f6',
        }}
      >
        <Box sx={{ padding: '16px', height: '125px' }}>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography variant="caption" color="grey.500">
              {label}
            </Typography>
            <EllipsisTypography variant="h6">{title}</EllipsisTypography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Typography color="error.main" sx={{ marginRight: '8px' }}>
              {hilightValue}
            </Typography>
            <Typography variant="caption" color="grey.500" sx={{ textDecoration: 'line-through' }}>
              {originValue}
            </Typography>
          </Box>
        </Box>
        <Divider />
        {rating && (
          <Box sx={{ padding: '16px', height: '87px' }}>
            <Rating value={rating} />
            <EllipsisTypography color="grey.500" sx={{ marginRight: '16px' }}>
              {ratingDesc}
            </EllipsisTypography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
