import emotionStyled from "@emotion/styled";
import type { Theme as ThemeType } from "./theme.types";

/**
 * Custom styled utility that provides theme typing
 * Similar to Material-UI's styled component
 *
 * The theme is automatically injected via Emotion's ThemeProvider
 * and is available in the styling function.
 *
 * @example
 * ```tsx
 * import { styled } from './components/hooks';
 *
 * const MyButton = styled.button`
 *   background-color: ${({ theme }) => theme.palette.primary.main};
 *   color: ${({ theme }) => theme.palette.primary.contrastText};
 *   padding: ${({ theme }) => theme.spacing(2)};
 *   border-radius: ${({ theme }) => theme.shape.borderRadius}px;
 * `;
 *
 * // Or with object syntax:
 * const MyDiv = styled.div(({ theme }) => ({
 *   backgroundColor: theme.palette.background.default,
 *   padding: theme.spacing(3),
 * }));
 * ```
 */

// Extend Emotion's theme type
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}

/**
 * Styled utility with theme support
 * Use this exactly like @emotion/styled, but with automatic theme typing
 */
export const styled = emotionStyled;
