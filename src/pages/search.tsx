import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"
import InfoCard from "../components/InfoCard";

function search({searchResults}) {
    const router = useRouter();
    const {location, startDate, endDate, adultsCount, childrenCount} = router.query;
    let formatedLocation: string;
    let guestCount: number;
    let formattedStartDate: string, formattedEndDate: string;

    if (typeof location === "string"
    ) {
        const arr = location.split(" ")
        const formated = arr.map(string => {
            return `${string.charAt(0).toLocaleUpperCase('en-US') + string.slice(1)}`;
        })
        formatedLocation = formated.join(" ").replace(/\s+/g, " ");
    }

    if (typeof adultsCount === "string" 
      && typeof childrenCount === "string"
    ) {
        guestCount = parseInt(adultsCount) + parseInt(childrenCount)
    }

    if (typeof startDate === "string" 
      && typeof endDate === "string"
    ) {
        formattedStartDate = format(new Date(startDate),"dd MMMM yy");
        formattedEndDate = format(new Date(startDate),"dd MMMM yy")
    }

    const dateRange = `${formattedStartDate} - ${formattedEndDate}` 

    return (
        <div className="">
            <Header position={100} placeholder={`${formatedLocation !== undefined ? formatedLocation : location } | ${dateRange}`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6 max-w-full">
                    <p className="text-xs ">300+ Stays — {dateRange} — for {guestCount !== undefined ? guestCount : 1}{` guest${guestCount > 1 ? 's': ''}`}.</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location && (formatedLocation)}</h1>

                    <div className="flex flex-nowrap overflow-x-scroll scrollbar-hide space-x-2 pb-5 text-gray-800 whitespace-nowrap">
                        <div className="chip">Cancellation Flexibility</div>
                        <div className="chip">Type of Place</div>
                        <div className="chip">Price</div>
                        <div className="chip">Rooms and Beds</div>
                        <div className="chip">More Filters</div>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map(
                            ({img, location, title, description, star, price, total}) => (
                                <InfoCard 
                                    key={img} 
                                    img={img} 
                                    location={location} 
                                    title={title} 
                                    description={description} 
                                    star={star} 
                                    price={price} 
                                    total={total}
                                />
                            )
                        )}
                    </div>
                </section>
                <section >
                    
                </section>
            </main>
            <div className="bg-gray-100"><Footer /></div>
            
        </div>
    )
}

export default search;

export async function getServerSideProps() {
    // const searchData = await fetch('url-to-fetch-api').then(res => res.json());
    const sampleSearchData = await new Array(
        {
            "img": "https://a0.muscache.com/im/pictures/e2e2bf3d-cb57-4ef0-9076-1571500da682.jpg?im_w=1440",
            "location": "Private room in center of London",
            "title": "Stay at this spacious Edwardian House",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.73,
            "price": "£30 / night",
            "total": "£117 total",
            "long": -0.0022275,
            "lat": 51.5421655
        },
        {
            "img": "https://images.pexels.com/photos/9582660/pexels-photo-9582660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "Independant luxury studio apartment",
            "description": "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
            "star": 4.3,
            "price": "£40 / night",
            "total": "£157 total",
            "long": -0.095091,
            "lat": 51.48695
        },
        {
            "img": "https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "London Studio Apartments",
            "description": "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
            "star": 3.8,
            "price": "£35 / night",
            "total": "£207 total",
            "long": -0.135638,
            "lat": 51.521916
        },
        {
            "img": "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "30 mins to Oxford Street, Excel London",
            "description": "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 4.1,
            "price": "£55 / night",
            "total": "£320 total",
            "long": -0.069961,
            "lat": 51.472618
        },
        {
            "img": "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "Spacious Peaceful Modern Bedroom",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
            "star": 5,
            "price": "£60 / night",
            "total": "£450 total",
            "long": -0.08472,
            "lat": 51.510794
        },
        {
            "img": "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "The Blue Room In London",
            "description": "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
            "star": 4.23,
            "price": "£65 / night",
            "total": "£480 total",
            "long": -0.094116,
            "lat": 51.51401
        },
        {
            "img": "https://images.pexels.com/photos/3769710/pexels-photo-3769710.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            "location": "Private room in center of London",
            "title": "5 Star Luxury Apartment",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 3.85,
            "price": "£90 / night",
            "total": "£650 total",
            "long": -0.109889,
            "lat": 51.521245
        }
    );
    return {
        props:{
            searchResults: sampleSearchData,
        },
    };
}
