import { MemoryScreen } from '@my/app/features/memory/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Memory',
          headerShown: false,
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <MemoryScreen />
      </SafeAreaView>
    </>
  )
}
