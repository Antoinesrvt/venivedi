import { HomeLayout } from 'app/features/home/layout.web'
import { FriendsScreen } from 'app/features/friends/screen'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Friends</title>
      </Head>
      <FriendsScreen />
    </>
  )
}

Page.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default Page
