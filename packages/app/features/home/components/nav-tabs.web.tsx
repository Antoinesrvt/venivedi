import {
  AnimatePresence,
  FontSizeTokens,
  SizableText,
  Stack,
  StackProps,
  TabLayout,
  Tabs,
  TabsProps,
  TabsTabProps,
  XStack,
} from '@my/ui'
import { Map, Users, Image as ImageIcon, Compass, User } from '@tamagui/lucide-icons'
import { useRouter as useNextRouter } from 'next/router'
import { useState } from 'react'
import { useRouter } from 'solito/router'

/**
 * this component is web-only
 */
export const NavTabs = (props: TabsProps) => {
  const nextRouter = useNextRouter()
  const router = useRouter()
  const currentTab = nextRouter.pathname
  const setCurrentTab = (newRoute: string) => router.push(newRoute)
  /**
   * Layout of the Tab user might intend to select (hovering / focusing)
   */
  const [intentAt, setIntentIndicator] = useState<TabLayout | null>(null)
  /**
   * Layout of the Tab user selected
   */
  const [activeAt, setActiveIndicator] = useState<TabLayout | null>(null)

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation={props.orientation}
      size={props.size}
      {...props}
    >
      <Tabs.List
        loop={false}
        w="100%"
        f={1}
        flexDirection={props.orientation === 'horizontal' ? 'row' : 'column'}
      >
        <Tab value="/" onInteraction={handleOnInteraction}>
          <XStack gap="$2" ai="center">
            <Map size={16} />
            <SizableText size={props.size as FontSizeTokens}>Map</SizableText>
          </XStack>
        </Tab>
        <Tab value="/friends" onInteraction={handleOnInteraction}>
          <XStack gap="$2" ai="center">
            <Users size={16} />
            <SizableText size={props.size as FontSizeTokens}>Friends</SizableText>
          </XStack>
        </Tab>
        <Tab value="/memories" onInteraction={handleOnInteraction}>
          <XStack gap="$2" ai="center">
            <ImageIcon size={16} />
            <SizableText size={props.size as FontSizeTokens}>Memories</SizableText>
          </XStack>
        </Tab>
        <Tab value="/discover" onInteraction={handleOnInteraction}>
          <XStack gap="$2" ai="center">
            <Compass size={16} />
            <SizableText size={props.size as FontSizeTokens}>Discover</SizableText>
          </XStack>
        </Tab>
        <Tab value="/profile" onInteraction={handleOnInteraction}>
          <XStack gap="$2" ai="center">
            <User size={16} />
            <SizableText size={props.size as FontSizeTokens}>Profile</SizableText>
          </XStack>
        </Tab>
      </Tabs.List>
    </Tabs>
  )
}

const Tab = (props: TabsTabProps) => (
  <Tabs.Tab unstyled jc="flex-end" py="$3" px="$3" m="$1.5" {...props}>
    {props.children}
  </Tabs.Tab>
)

const TabsRovingIndicator = ({ active, ...props }: { active?: boolean } & StackProps) => (
  <Stack
    pos="absolute"
    bg="$color5"
    animation="100ms"
    o={1}
    enterStyle={{
      o: 0,
    }}
    exitStyle={{
      o: 0,
    }}
    {...(active && {
      backgroundColor: '$color9',
    })}
    {...props}
  />
)
