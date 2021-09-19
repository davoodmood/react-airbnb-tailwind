import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image 
                src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center text-white drop-shadow-md">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-2 sm:py-4 my-3 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150"> Visit The Tours</button>
            </div>
        </div>
    )
}

export default Banner
