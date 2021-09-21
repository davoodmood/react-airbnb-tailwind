import {SmallCardProps} from '../types/index'
import Image from 'next/image'

function SmallCard({img, location, distance}: SmallCardProps) {
    return (
        <div className="flex items-center mt-2 m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
            <div id="left" className="relative h-16 w-16">
                <Image 
                    src={img} 
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg" 
                />
            </div>
            <div id="right">
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
