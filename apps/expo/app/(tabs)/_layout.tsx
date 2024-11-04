import { useTheme, Button, XStack, YStack, Text, Input, Theme } from '@my/ui'
import {
  Bell,
  MessageCircle,
  MapPin,
  ChevronDown,
  Globe,
  Users,
  Image as ImageIcon,
  Search,
  Home,
  User,
} from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TopBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const theme = useTheme()

  return (
    <SafeAreaView edges={['top']}>
      <YStack borderBottomWidth={1} borderBottomColor="$borderColor" bg="$background">
        <XStack h={56} px="$4" ai="center" jc="space-between">
          {/* Left Section */}
          <XStack ai="center" gap="$3">
            <Text fontSize="$6" fontWeight="600" color="$color12">
              Veni Vidi
            </Text>
          </XStack>

          {/* Center - Location */}
          <Button
            iconAfter={ChevronDown}
            size="$3"
            theme="alt2"
            borderRadius="$10"
            pressStyle={{ scale: 0.97 }}
          >
            <XStack ai="center" gap="$2">
              <MapPin size={18} color="$gray10" />
              <Text>New York</Text>
            </XStack>
          </Button>

          {/* Right Section */}
          <XStack ai="center" gap="$2">
            <Button
              size="$3"
              circular
              theme="alt2"
              position="relative"
              pressStyle={{ scale: 0.97 }}
            >
              <Bell size={20} color="$gray10" />
              <YStack position="absolute" top={8} right={8} w={8} h={8} br="$10" bg="$red10" />
            </Button>

            <Button size="$3" circular theme="alt2" pressStyle={{ scale: 0.97 }}>
              <MessageCircle size={20} color="$gray10" />
            </Button>
          </XStack>
        </XStack>

        {/* Search Overlay */}
        {isSearchOpen && (
          <YStack px="$4" py="$2" borderBottomWidth={1} borderBottomColor="$borderColor">
            <XStack position="relative" ai="center">
              <Input
                placeholder="Search activities, groups, or people..."
                pl="$10"
                pr="$4"
                py="$2"
                br="$4"
                bg="$gray3"
                w="100%"
              />
              <Search size={20} color="$gray10" style={{ position: 'absolute', left: 12 }} />
            </XStack>
          </YStack>
        )}
      </YStack>
    </SafeAreaView>
  )
}

export default function TabsLayout() {
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  return (
    <YStack f={1} bg="$background">
      <TopBar />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: theme.background.get(),
            borderTopWidth: 1,
            borderTopColor: theme.borderColor.get(),
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
          },
          tabBarActiveTintColor: theme.blue10.get(),
          tabBarInactiveTintColor: theme.gray10.get(),
        }}
      >
        <Tabs.Screen
          name="index"
          key="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <Home size={size} color={focused ? '$blue10' : '$gray10'} strokeWidth={2} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          key="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused, size }) => (
              <User size={size} color={focused ? '$blue10' : '$gray10'} strokeWidth={2} />
            ),
          }}
        />
      </Tabs>
    </YStack>
  )
}
