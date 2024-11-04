import { HomeLayout } from 'app/features/home/layout.web'
import { MemoryScreen } from 'app/features/memory/screen'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Memories</title>
      </Head>
      <MemoryScreen />
    </>
  )
}

Page.getLayout = (page) => <HomeLayout>{page}</HomeLayout>

export default Page
