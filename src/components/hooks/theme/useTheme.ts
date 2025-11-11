import { useTheme as useEmotionTheme } from "@emotion/react";
import { Theme } from "./theme.types";

/**
 * Hook to access the theme object
 * Uses Emotion's built-in useTheme hook
 *
 * @returns The current theme object
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const theme = useTheme();
 *
 *   return (
 *     <div style={{
 *       backgroundColor: theme.palette.background.default,
 *       color: theme.palette.text.primary,
 *       padding: theme.spacing(2)
 *     }}>
 *       Hello World
 *     </div>
 *   );
 * };
 * ```
 */
export function useTheme(): Theme {
  return useEmotionTheme();
}
