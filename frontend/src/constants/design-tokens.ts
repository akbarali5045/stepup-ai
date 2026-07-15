/* ==========================================
   DESIGN TOKENS (TypeScript Constants)
   ========================================== */

// ================
// COLORS
// ================
export const COLORS = {
  PRIMARY: "#111111",
  SECONDARY: "#ffffff",
  ACCENT: "#ff6b00",
  BACKGROUND: "#f8f8f8",
  SUCCESS: "#10b981",
  WARNING: "#f59e0b",
  ERROR: "#ef4444",
  BORDER: "#e5e7eb",
  MUTED: "#6b7280",
} as const;

// ================
// TYPOGRAPHY
// ================
export const TYPOGRAPHY = {
  FONT_FAMILY: {
    SANS: "var(--font-geist-sans)",
    MONO: "var(--font-geist-mono)",
  },
  FONT_SIZE: {
    XS: "0.75rem", // 12px
    SM: "0.875rem", // 14px
    BASE: "1rem", // 16px
    LG: "1.125rem", // 18px
    XL: "1.25rem", // 20px
    "2XL": "1.5rem", // 24px
    "3XL": "1.875rem", // 30px
    "4XL": "2.25rem", // 36px
  },
  FONT_WEIGHT: {
    LIGHT: 300,
    NORMAL: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  LINE_HEIGHT: {
    TIGHT: 1.25,
    NORMAL: 1.5,
    RELAXED: 1.75,
  },
} as const;

// ================
// SPACING SCALE
// ================
export const SPACING = {
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
} as const;

// ================
// BORDER RADIUS
// ================
export const BORDER_RADIUS = {
  SM: "0.25rem", // 4px
  MD: "0.5rem", // 8px
  LG: "0.75rem", // 12px
  XL: "1rem", // 16px
  FULL: "9999px",
} as const;

// ================
// SHADOWS
// ================
export const SHADOWS = {
  SM: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  MD: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  LG: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
} as const;

// ================
// TRANSITIONS
// ================
export const TRANSITIONS = {
  FAST: "150ms ease",
  NORMAL: "300ms ease",
  SLOW: "500ms ease",
} as const;

// ================
// CONTAINER WIDTHS
// ================
export const CONTAINER_WIDTHS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
} as const;

// ================
// BREAKPOINTS
// ================
export const BREAKPOINTS = {
  MOBILE: "640px",
  TABLET: "768px",
  LAPTOP: "1024px",
  DESKTOP: "1280px",
} as const;

// ================
// CSS VARIABLE NAMES
// ================
export const CSS_VARIABLES = {
  COLORS: {
    PRIMARY: "--color-primary",
    SECONDARY: "--color-secondary",
    ACCENT: "--color-accent",
    BACKGROUND: "--color-background",
    SUCCESS: "--color-success",
    WARNING: "--color-warning",
    ERROR: "--color-error",
    BORDER: "--color-border",
    MUTED: "--color-muted",
  },
  TYPOGRAPHY: {
    FONT_FAMILY: {
      SANS: "--font-family-sans",
      MONO: "--font-family-mono",
    },
    FONT_SIZE: {
      XS: "--font-size-xs",
      SM: "--font-size-sm",
      BASE: "--font-size-base",
      LG: "--font-size-lg",
      XL: "--font-size-xl",
      "2XL": "--font-size-2xl",
      "3XL": "--font-size-3xl",
      "4XL": "--font-size-4xl",
    },
    FONT_WEIGHT: {
      LIGHT: "--font-weight-light",
      NORMAL: "--font-weight-normal",
      MEDIUM: "--font-weight-medium",
      SEMIBOLD: "--font-weight-semibold",
      BOLD: "--font-weight-bold",
    },
    LINE_HEIGHT: {
      TIGHT: "--line-height-tight",
      NORMAL: "--line-height-normal",
      RELAXED: "--line-height-relaxed",
    },
  },
  SPACING: {
    1: "--spacing-1",
    2: "--spacing-2",
    3: "--spacing-3",
    4: "--spacing-4",
    5: "--spacing-5",
    6: "--spacing-6",
    8: "--spacing-8",
    10: "--spacing-10",
    12: "--spacing-12",
    16: "--spacing-16",
  },
  BORDER_RADIUS: {
    SM: "--radius-sm",
    MD: "--radius-md",
    LG: "--radius-lg",
    XL: "--radius-xl",
    FULL: "--radius-full",
  },
  SHADOWS: {
    SM: "--shadow-sm",
    MD: "--shadow-md",
    LG: "--shadow-lg",
  },
  TRANSITIONS: {
    FAST: "--transition-fast",
    NORMAL: "--transition-normal",
    SLOW: "--transition-slow",
  },
  CONTAINER_WIDTHS: {
    SM: "--container-sm",
    MD: "--container-md",
    LG: "--container-lg",
    XL: "--container-xl",
    "2XL": "--container-2xl",
  },
  BREAKPOINTS: {
    MOBILE: "--breakpoint-mobile",
    TABLET: "--breakpoint-tablet",
    LAPTOP: "--breakpoint-laptop",
    DESKTOP: "--breakpoint-desktop",
  },
} as const;
