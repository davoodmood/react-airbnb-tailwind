import Image from "next/image"

function LargeCard({ img, title, description, buttonTxt }) {
    return (
        <section className="relative my-10">
            <div id="large-card-bg" className="relative h-96 min-w-[240px] rounded-xl ">
                <Image src={img} className="rounded-2xl z-0" layout="fill" objectFit="cover" objectPosition="center center" >
                </Image>
            </div>
            <div id="large-card-overlay" className="absolute top-24 left-12 max-w-[225px] ">
                <div className=" rounded-xl bg-gradient-to-l from-gray-600 to-transparent p-5 sm:from-transparent">
                    <h3 className="text-gray-100 text-2xl font-semibold">{title}</h3>
                    <p className="mt-4 text-gray-100">{description}</p>
                    <button className="mt-4 text-sm text-gray-700 rounded-full py-2 px-4 bg-gray-100 hover:scale-105 active:scale-90 transition duration-100 ease-in-out"><span className="font-semibold">{buttonTxt}</span></button>
                </div>
            </div>
        </section>
    )
}

export default LargeCard
