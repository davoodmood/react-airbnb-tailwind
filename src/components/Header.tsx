import Image from "next/image"
import Logo from "../../public/Airbnb_Logo.png"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid"

function Header({position}: {position: number}) {
    return (
        <header id="headerContainer" className={`transition ${position === 0 ? 'bg-black bg-opacity-0 text-gray-100' : 'bg-white shadow-md bg-opacity-100'} easy-out duration-200 sticky top-0 z-50  py-5 px-5 md:px-10` }>
            <div className="max-w-7xl mx-auto grid grid-cols-3">
                {/* Header Start */}
                <div className="relative flex h-10 my-auto cursor-pointer">
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
                    <input className={`${position === 0 ? 'text-white': ''} flex-grow pl-5 bg-transparent outline-none`} type="text" placeholder="Where to go?"/>
                    <SearchIcon className="hidden md:inline-flex h-7 bg-red-300 text-white rounded-full p-1 cursor-pointer md:mx-2 hover:bg-red-400"/>
                </div>
                {/* Header End */}
                <div className={`flex items-center justify-end space-x-4 ${position === 0 ? 'text-gray-200': 'text-gray-500'}`}>
                    <p className={`hidden md:inline cursor-pointer ${position === 0 ? 'hover:text-white': 'hover:text-gray-700'}`}>Become a host</p>
                    <GlobeAltIcon className={`h-6 cursor-pointer ${position === 0 ? 'hover:text-white': 'hover:text-gray-700'}`} />
                    <div className="flex space-x-2 border-2 p-2 rounded-full">
                        <MenuIcon className={`${position === 0 ? 'hover:text-white': 'hover:text-gray-700'} h-6 cursor-pointer `}/>
                        <UserCircleIcon className={`${position === 0 ? 'hover:text-white': 'hover:text-gray-700'} h-6 cursor-pointer`} />
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header
