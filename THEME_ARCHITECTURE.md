# Theme Implementation - Clean Architecture

## Overview

The theme system now uses Emotion's native APIs directly, reducing custom wrapper code and following Emotion's best practices.

## Architecture

### 1. **ThemeContext.tsx**
- Wraps Emotion's `ThemeProvider`
- Manages theme state (light/dark mode)
- Provides utilities: `toggleColorMode()`, `setTheme()`
- Uses `useThemeContext()` hook for utilities only

### 2. **useTheme.ts**
- Re-exports Emotion's native `useTheme` hook
- No custom wrapper - direct access to Emotion's API
- Fully typed with TypeScript

### 3. **styled.ts**
- Re-exports Emotion's `styled` API
- Extends Emotion's theme interface for TypeScript
- No custom wrapper - pure Emotion API

### 4. **createTheme.ts**
- Helper to create theme objects
- Provides `defaultLightTheme` and `defaultDarkTheme`
- Deep merges custom theme options

### 5. **theme.types.ts**
- TypeScript interfaces for theme structure
- Extended into Emotion's Theme interface

## Key Benefits

✅ **Native Emotion APIs** - Uses Emotion's built-in hooks and providers
✅ **Less Code** - No redundant wrapper layers
✅ **Better Performance** - Direct access to Emotion's context
✅ **Type Safety** - Full TypeScript support via module augmentation
✅ **Standards Compliant** - Follows Emotion's documented patterns

## Usage Pattern

```tsx
import { useTheme, useThemeContext, styled } from './components/hooks';

// Access theme (Emotion's native hook)
const theme = useTheme();

// Access utilities (custom context)
const { toggleColorMode } = useThemeContext();

// Create styled components (Emotion's native API)
const Button = styled.button(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));
```

## Files Structure

```
src/components/hooks/theme/
├── index.ts              # Barrel exports
├── ThemeContext.tsx      # Provider + utilities context
├── useTheme.ts           # Re-export Emotion's useTheme
├── styled.ts             # Re-export Emotion's styled
├── createTheme.ts        # Theme factory
└── theme.types.ts        # TypeScript types
```

## Migration from Custom Implementation

**Before (Custom wrapper):**
- Custom ThemeContext with redundant state
- Custom useTheme hook wrapping context
- Extra layer of abstraction

**After (Clean Emotion):**
- Emotion's ThemeProvider for theme state
- Emotion's useTheme for theme access
- Lightweight context only for utilities
- Direct Emotion API usage

This approach aligns with how Material-UI v5+ handles theming with Emotion.
