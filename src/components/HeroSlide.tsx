import Image from "next/image"
import Header from "./Header"
function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[650px] 2xl:h-[850px]">
            <Image 
                src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
            />
            <div className="absolute top-1/2 w-full text-center drop-shadow-md">
                <p className="text-sm sm:text-xl">Not sure where to go? Perfect.</p>
                <button className="font-semibold sm:text-lg text-purple-500 bg-white px-10 py-2 sm:py-4 my-3 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150"> I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
