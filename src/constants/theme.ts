export const Colors = {
  light: {
    text: '#000000',
    textSecondary: '#60646C',
    background: '#FFFFFF',
    surface: '#F0F0F3',
  },
  dark: {
    text: '#FFFFFF',
    textSecondary: '#B0B4BA',
    background: '#000000',
    surface: '#212225',
  },
} as const
export type ThemeColor = keyof typeof Colors.light
export const Spacing = {
  extraSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  extraLarge: 32,
} as const
