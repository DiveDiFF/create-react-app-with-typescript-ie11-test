import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import TextFieldForm from '../../components/Common/FormItem/TextField';

export default function FormList() {
  return (
    <Box sx={{ my: '64px' }}>
      <Typography variant="h4" component="h3" gutterBottom>
        폼 리스트
      </Typography>
      <Stack spacing={2} sx={{ my: '16px' }}>
        <TextFieldForm />
        <TextFieldForm maxLength={99} defaultValue="가나다라마바사" />
        <TextFieldForm type="readonly" defaultValue="입력중인 텍스트 리드온니 폼" />
        <TextFieldForm type="disabled" defaultValue="제어 불가 폼" />
      </Stack>
    </Box>
  );
}
