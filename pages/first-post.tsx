import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';


export default function FirstPost() {
  return (
    <Layout>
      <Head>
          <title>Yimpetit's Blog</title>
      </Head>
      <h1 className='p-6 max-w-sm mx-auto bg-red rounded-xl shadow-md flex items-center space-x-4'>
        Read{' '}
        <Link href="/"><a className='text-xl font-medium'>back home</a></Link>
      </h1>
    </Layout>
  )
}