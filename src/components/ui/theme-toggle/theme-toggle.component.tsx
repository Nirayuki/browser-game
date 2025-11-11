import { memo } from "react";
import { useTheme, useThemeContext } from "../../hooks";

export const ThemeToggle = memo(() => {
  const theme = useTheme();
  const { toggleColorMode } = useThemeContext();

  return (
    <button
      onClick={toggleColorMode}
      style={{
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.primary.light
        }`,
        borderRadius: theme.shape.borderRadius,
        cursor: "pointer",
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
        boxShadow: theme.shadows[1],
        transition: `all ${theme.transitions.duration.short}ms ${theme.transitions.easing.easeInOut}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor =
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark
            : theme.palette.primary.light;
        e.currentTarget.style.boxShadow = theme.shadows[3];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = theme.palette.background.paper;
        e.currentTarget.style.boxShadow = theme.shadows[1];
      }}
      aria-label={`Switch to ${
        theme.palette.mode === "light" ? "dark" : "light"
      } mode`}
    >
      <span style={{ fontSize: "1.2rem" }}>
        {theme.palette.mode === "light" ? "🌙" : "☀️"}
      </span>
      <span>{theme.palette.mode === "light" ? "Dark" : "Light"} Mode</span>
    </button>
  );
});

ThemeToggle.displayName = "ThemeToggle";
