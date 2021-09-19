import Image from "next/image"
import Logo from "../../public/Airbnb_Logo.png"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header id="headerContainer" className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            {/* Header Start */}
            <div className="relative flex h-10 cursor-pointer my-auto">
                <Image  
                    src={Logo}
                    alt="Airbnb Logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Header Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className=" flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Where to go?"/>
                <SearchIcon className="hidden md:inline-flex h-7 bg-red-300 text-white rounded-full p-1 cursor-pointer md:mx-2 hover:bg-red-400"/>
            </div>
            {/* Header End */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer hover:text-gray-600">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer hover:text-gray-600" />
                <div className="flex space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer hover:text-gray-600"/>
                    <UserCircleIcon className="h-6 cursor-pointer hover:text-gray-600" />
                </div>
            </div>
        </header>
    )
}

export default Header
