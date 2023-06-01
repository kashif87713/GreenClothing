import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '../pages/Home/HomePage';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Green Clothing Pvt Ltd</title>
        <meta name="greenclothing" content="green clothing saqlain" />
        <meta name="factory" content="gajju matta" />
        <link rel="icon" href="/logoonly.png" />
      </Head>
      <main className={styles.main}>
        <HomePage />
      </main>
    </>
  )
}
