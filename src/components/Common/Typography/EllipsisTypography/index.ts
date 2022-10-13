import { styled, Typography } from '@mui/material';

type EllipsisTypographyProps = {
  lineNumber?: number;
};

export const EllipsisTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "lineNumber",
})<EllipsisTypographyProps>(
  ({ lineNumber = 1, theme: { spacing, palette } }) => ({
    overflowX: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: lineNumber,
    WebkitBoxOrient: "vertical",
    display: "-webkit-box",
  })
);
