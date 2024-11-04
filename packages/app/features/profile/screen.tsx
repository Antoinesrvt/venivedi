import { Avatar, H3, Settings, Theme, XStack, YStack, getTokens } from '@my/ui'
import { Box, Cog, LogOut, Milestone, ShoppingCart, User } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
// import { supabase } from 'app/utils/supabase'
import { SolitoImage } from 'solito/image'
import { useLink } from 'solito/link'
import { useRouter } from 'solito/router'

export function ProfileScreen() {
  const { profile, avatarUrl } = useUser()
  const router = useRouter()
  const name = profile?.name

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  //   router.replace('/login')
  // }

  return (
    <YStack f={1} space="$4">
      {/* Profile Header */}
      <YStack ai="center" py="$6" space="$4">
        <Avatar circular size="$8">
          <SolitoImage
            src={avatarUrl}
            alt="Profile picture"
            width={getTokens().size['8'].val}
            height={getTokens().size['8'].val}
          />
        </Avatar>
        <H3>{name ?? 'No Name'}</H3>
      </YStack>

      {/* Menu Items */}
      <Settings>
        <Settings.Items>
          <Settings.Group>
            <Settings.Item
              icon={User}
              {...useLink({ href: '/profile/edit' })}
              // accentColor="$blue10"
            >
              Edit Profile
            </Settings.Item>
            <Settings.Item
              icon={Box}
              // accentColor="$green10"
            >
              My Items
            </Settings.Item>
            <Settings.Item
              icon={Milestone}
              // accentColor="$orange10"
            >
              Address Info
            </Settings.Item>
            <Settings.Item
              icon={ShoppingCart}
              // accentColor="$purple10"
            >
              Purchase History
            </Settings.Item>
          </Settings.Group>

          <Settings.Group>
            <Settings.Item
              icon={Cog}
              {...useLink({ href: '/settings' })}
              // accentColor="$gray10"
            >
              Settings
            </Settings.Item>
            <Theme name="red">
              <Settings.Item
                icon={LogOut}
                // onPress={handleSignOut}
                // accentColor="$red10"
              >
                Sign Out
              </Settings.Item>
            </Theme>
          </Settings.Group>
        </Settings.Items>
      </Settings>
    </YStack>
  )
}
