import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

import VerticalCard from '../../../components/Common/Card/VerticalCard';
import { VerticalCardData } from '../../../typings/cards';

const CARD_MOCK_DATA: VerticalCardData[] = [
  {
    id: 'card_1',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    label: 'label',
    originValue: 'Cross Out',
    hilightValue: 'Hilight',
    rating: 5,
    ratingDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
  {
    id: 'card_2',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    label: 'label',
    originValue: 'Cross Out',
    hilightValue: 'Hilight',
    rating: 2,
    ratingDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
  {
    id: 'card_3',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    label: 'label',
    originValue: 'Cross Out',
    hilightValue: 'Hilight',
  },
  {
    id: 'card_4',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    label: 'label',
    originValue: 'Cross Out',
    hilightValue: 'Hilight',
    rating: 4,
  },
];

export default function VerticalCardList() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h4" gutterBottom>
        세로형 카드 리스트
      </Typography>
      <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {CARD_MOCK_DATA.map((item, index) => (
          <ListItem
            sx={{ maxWidth: '308px', padding: '4px', alignItems: 'flex-start' }}
            key={index}
          >
            <VerticalCard cardData={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
