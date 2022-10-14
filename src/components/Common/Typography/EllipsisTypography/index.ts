import { styled, Typography } from '@mui/material';

type EllipsisTypographyProps = {
  lineNumber?: number;
};

export const EllipsisTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'lineNumber',
})<EllipsisTypographyProps>(({ lineNumber = 1, theme: { spacing, palette } }) => ({
  display: '-webkit-box',
  width: '100%',
  height: lineNumber * 24,
  overflow: 'hidden',
  WebkitLineClamp: lineNumber,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
}));
