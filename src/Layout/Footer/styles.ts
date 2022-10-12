import { styled } from '@mui/material';

export const FooterBox = styled("footer")(({ theme: { palette } }) => ({
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flex: 1,
  padding: "16px 0",
  borderTop: `1px solid ${palette.grey["200"]}`,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: palette.background.default,
}));
