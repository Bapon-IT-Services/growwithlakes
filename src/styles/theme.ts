export const theme = {
  colors: {
    bg: '#050505',
    bgElevated: '#0c0c0c',
    surface: '#111111',
    border: 'rgba(212, 175, 55, 0.34)',
    gold: '#d4af37',
    goldBright: '#e8c547',
    goldMuted: 'rgba(212, 175, 55, 0.22)',
    white: '#fafafa',
    muted: '#9ca3af',
    mutedDark: '#6b7280',
  },
  fonts: {
    display: '"Cormorant Garamond", Georgia, serif',
    body: '"DM Sans", system-ui, sans-serif',
  },
  maxWidth: '1120px',
  headerHeight: '72px',
  radius: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    pill: '999px',
  },
} as const;

export type GWLTheme = typeof theme;
