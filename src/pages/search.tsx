import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns"

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
                </section>
            </main>
            <div className="bg-gray-100"><Footer /></div>
            
        </div>
    )
}

export default search;

export async function getServerSideProps() {
    // const searchData = await fetch('url-to-fetch-api').then(res => res.json());
    const sampleSearchData = await new Array([
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
            "img": "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg",
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
            "img": "https://www.smartertravel.com/wp-content/uploads/2017/07/Untitled-design-8.jpg",
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
            "img": "https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI",
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
            "img": "https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg",
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
            "img": "https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937",
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
            "img": "https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",
            "location": "Private room in center of London",
            "title": "5 Star Luxury Apartment",
            "description": "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
            "star": 3.85,
            "price": "£90 / night",
            "total": "£650 total",
            "long": -0.109889,
            "lat": 51.521245
        }]
    );
    return {
        props:{
            searchResults: sampleSearchData,
        },
    };
}
