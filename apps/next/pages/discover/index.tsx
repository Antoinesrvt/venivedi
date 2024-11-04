import { HomeLayout } from 'app/features/home/layout.web'
import { DiscoverScreen } from 'app/features/discover/screen'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Discover</title>
      </Head>
      <DiscoverScreen />
    </>
  )
}

Page.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default Page
