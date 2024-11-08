import { HomeLayout } from 'app/features/home/layout.web'
import { ProfileMenuScreen } from 'app/features/profile/menu-screen'
import Head from 'next/head'
import type { NextPageWithLayout } from '../_app'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Menu</title>
      </Head>
      <ProfileMenuScreen />
    </>
  )
}

Page.getLayout = (page) => <HomeLayout fullPage>{page}</HomeLayout>

export default Page
