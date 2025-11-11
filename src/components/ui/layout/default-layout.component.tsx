import { memo } from "react";
import { Link } from "react-router";
import { useTheme } from "../../hooks";
import styled from "@emotion/styled";

export interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = memo(({ children }: DefaultLayoutProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/about">About</Link>
      </Header>
      {children}
    </Container>
  );
});

const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

const Header = styled.header(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));
