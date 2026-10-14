import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { useTheme } from '@/hooks/use-theme'

export default function RootLayout() {
  const isDark = useColorScheme() === 'dark'
  const theme = useTheme()
  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
        }}
      />
    </ThemeProvider>
  )
}
