import Head from 'next/head'
import HeroSlide from '../components/HeroSlide'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>David's Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Navigation*/}
      <Header />
      {/* Hero Slide */}
      <HeroSlide />
      {/* Body */}
    </div>
  )
}
