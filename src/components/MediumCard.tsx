import {MediumCardProps} from '../types/index'
import Image from 'next/image'
function MediumCard({img, title}: MediumCardProps) {
    return (
        <div className="h-80 cursor-pointer hover:scale-105 transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image className="rounded-lg" src={img} layout="fill" />
            </div>
            <h3 className="font-semibold text-xl">{title}</h3>
        </div>
    )
}

export default MediumCard
