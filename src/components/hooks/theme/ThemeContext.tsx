import React, {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useContext,
} from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { Theme } from "./theme.types";
import { createTheme, defaultLightTheme } from "./createTheme";

interface ThemeContextType {
  toggleColorMode: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultLightTheme);

  const toggleColorMode = () => {
    setTheme((prevTheme) =>
      createTheme({
        ...prevTheme,
        palette: {
          ...prevTheme.palette,
          mode: prevTheme.palette.mode === "light" ? "dark" : "light",
        },
      })
    );
  };

  const contextValue = useMemo(
    () => ({
      toggleColorMode,
      setTheme,
    }),
    []
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * Hook to access theme utilities (toggleColorMode, setTheme)
 */
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}
