import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';

import HorizontalCard from '../../../components/Common/Card/HorizontalCard';
import { HorizontalCardData } from '../../../typings/cards';

const CARD_MOCK_DATA: HorizontalCardData[] = [
  {
    id: 'card_1',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    writer: 'John Doe',
    rating: 5,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
  {
    id: 'card_2',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    writer: 'No Name',
    rating: 2,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
  {
    id: 'card_3',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    writer: 'anonymous',
    rating: 4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
  {
    id: 'card_4',
    thumbnailURL: 'https://picsum.photos/300/300',
    title: 'title',
    writer: 'Danny Yun',
    rating: 4,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has
    survived not only five centuries`,
  },
];

export default function HorizontalCardList() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h4" gutterBottom>
        가로형 카드 리스트
      </Typography>
      <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {CARD_MOCK_DATA.map((item, index) => (
          <ListItem
            sx={{ maxWidth: '508px', padding: '4px', alignItems: 'flex-start' }}
            key={index}
          >
            <HorizontalCard cardData={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
