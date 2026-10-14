import { StyleSheet, Text, type TextProps } from 'react-native'
import { type ThemeColor } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

export type ThemedTextProps = TextProps & {
  variant?: 'body' | 'title' | 'caption'
  color?: ThemeColor
}
export function ThemedText({
  style,
  variant = 'body',
  color = 'text',
  ...props
}: ThemedTextProps) {
  const theme = useTheme()
  return (
    <Text
      {...props}
      style={[styles[variant], { color: theme[color] }, style]}
    />
  )
}
const styles = StyleSheet.create({
  body: { fontSize: 16, lineHeight: 24 },
  title: { fontSize: 32, lineHeight: 40, fontWeight: '600' },
  caption: { fontSize: 14, lineHeight: 20 },
})
