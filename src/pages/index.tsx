import Head from 'next/head'
import HeroSlide from '../components/HeroSlide'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import exploreNearbyCall from './api/apiService'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({cardsData, exploreData}) {

  console.log("Cards Data: ", cardsData)
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
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className={`text-4xl font-semibold pb-5`}>Explore Nearby</h2>

          {/* pull Data from the server. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-col-4">
            {exploreData?.map((item) => (
              <SmallCard 
                key={item.img} 
                img={item.img} 
                location={item.location} 
                distance={item.distance} 
              />
            ))}
          </div>
        </section>
        <section className="">
          <h2 className="text-4xl font-semibold pt-8">Live Anywhere</h2>          
          <div className="flex space-x-3 px-8 py-10 -ml-8 overflow-x-scroll scrollbar-hide">
            {cardsData?.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard 
          img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
          title="Try hosting"
          description="Earn extra income and unlock new opportunities by sharing your space."
          buttonTxt="Learn more"
        />
      </main>
      <footer className="bg-gray-100">
        <Footer />
      </footer>
      
    </div>
  )
}

export async function getStaticProps<GetStaticProps>() {
  // Getting a static file
  // const cardsData = await fetch(`url-to-server-api`)
  // .then(
  //   (res) => res.json()
  // );
  const exploreData = await new Array(
    {
      "img":"https://a0.muscache.com/im/pictures/18ab1ca2-a759-48de-a55b-1cb67c25c637.jpg?im_q=medq&im_w=240",
      "location":"London",
      "distance":"45-minute drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240",
      "location":"Manchester",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/82293cc1-ba0b-4167-85a6-ed133d478c20.jpg?im_q=medq&im_w=240",
      "location":"Liverpool",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/da75656c-f2d5-4878-aade-f2971842365f.jpg?im_q=medq&im_w=240",
      "location":"York",
      "distance":"4-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/42901911-940b-45ac-997e-961ebf472195.jpg?im_q=medq&im_w=240",
      "location":"Cardiff",
      "distance":"45-minute drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/73ab906b-eea1-425d-9fea-bf2c79d86556.jpg?im_q=medq&im_w=240",
      "location":"Birkenhead",
      "distance":"4.5-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=240",
      "location":"Newquay",
      "distance":"6-hour drive"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/3849e3f1-d275-43fb-8957-4c90f26e14db.jpg?im_q=medq&im_w=240",
      "location":"Hove",
      "distance":"2-hour drive"
    }
  );

  const cardsData = new Array(
    {
      "img":"https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=1440",
      "title":"Outdoor getaways"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=1440",
      "title":"Unique stays"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=1440",
      "title":"Entire homes"
    },
    {
      "img":"https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=1440",
      "title":"Pet allowed"
    },
  );

  return {
    props: {
      cardsData,
      exploreData
    }
  }
}
