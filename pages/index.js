import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Switch from '@mui/material/Switch'

import Hero from '../components/Hero'
import Toggle from '../components/Toggle'

export default function Home() {
  return (
    <>
      <Head>
        <title>D Atas</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero /> */}
      <Toggle />
    </>
  )
}
