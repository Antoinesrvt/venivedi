import { DiscoverScreen } from '@my/app/features/discover/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Discover',
          headerShown: false,
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <DiscoverScreen />
      </SafeAreaView>
    </>
  )
}
