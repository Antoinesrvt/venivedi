import { FriendsScreen } from '@my/app/features/friends/screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Friends',
          headerShown: false,
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <FriendsScreen />
      </SafeAreaView>
    </>
  )
}
