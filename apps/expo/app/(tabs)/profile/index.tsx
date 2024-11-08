import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileScreen } from '@my/app/features/profile/screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <ProfileScreen />
      </SafeAreaView>
    </>
  )
}
