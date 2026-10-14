import { View, type ViewProps } from 'react-native'
import { type ThemeColor } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

export type ThemedViewProps = ViewProps & { backgroundColor?: ThemeColor }
export function ThemedView({
  style,
  backgroundColor = 'background',
  ...props
}: ThemedViewProps) {
  const theme = useTheme()
  return (
    <View
      {...props}
      style={[{ backgroundColor: theme[backgroundColor] }, style]}
    />
  )
}
