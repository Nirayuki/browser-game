import React from "react";
import { styled, useTheme, useThemeContext } from "../hooks";

// Styled button component with theme
const StyledButton = styled.button(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  border: "none",
  cursor: "pointer",
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.button.fontWeight,
  textTransform: theme.typography.button.textTransform as any,
  transition: `background-color ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
  boxShadow: theme.shadows[2],

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: theme.shadows[4],
  },

  "&:active": {
    boxShadow: theme.shadows[1],
  },
}));

// Styled container with responsive breakpoints
const Container = styled.div(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  maxWidth: "600px",
  margin: "0 auto",

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    maxWidth: "100%",
  },
}));

const Title = styled.h2(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
}));

const Text = styled.p(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

export const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode } = useThemeContext();
  const theme = useTheme();

  return (
    <StyledButton onClick={toggleColorMode}>
      Switch to {theme.palette.mode === "light" ? "Dark" : "Light"} Mode
    </StyledButton>
  );
};

export const StyledExample: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>Styled Components with Theme</Title>
      <Text>
        This component uses @emotion/styled with theme support, just like
        Material-UI! Current mode: <strong>{theme.palette.mode}</strong>
      </Text>
      <ThemeToggleButton />
    </Container>
  );
};
