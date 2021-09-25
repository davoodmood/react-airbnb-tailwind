import { useState } from "react"
import Image from "next/image"
import Logo from "../../public/Airbnb_Logo.png"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, DefinedRange, DateRange , createStaticRanges } from 'react-date-range';
import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
} from 'date-fns';
import { useRouter } from "next/dist/client/router";

  const defineds = {
    startOfWeek: startOfWeek(new Date()),
    endOfWeek: endOfWeek(new Date()),
    startOfNextWeek: startOfWeek(addDays(new Date(), +7)),
    endOfNextWeek: endOfWeek(addDays(new Date(), +7)),
    startOfToday: startOfDay(new Date()),
    endOfToday: endOfDay(new Date()),
    startOfTommorow: startOfDay(addDays(new Date(), +1)),
    endOfTommorow: endOfDay(addDays(new Date(), +1)),
    startOfMonth: startOfMonth(new Date()),
    endOfMonth: endOfMonth(new Date()),
    startOfNextMonth: startOfMonth(addMonths(new Date(), +1)),
    endOfNextMonth: endOfMonth(addMonths(new Date(), +1)),
  };
  const sidedefinedDateRangeOptions = () => {
    const definedRanges = [
        {
          label: 'Today',
          range: () => ({
            startDate: defineds.startOfToday,
            endDate: defineds.endOfToday,
          }),
        },
        {
          label: 'Tomorrow',
          range: () => ({
            startDate: defineds.startOfTommorow,
            endDate: defineds.endOfTommorow,
          }),
        },
        {
          label: 'A Week',
          range: () => ({
            startDate: new Date(),
            endDate: addDays(new Date(), +6),
          }),
        },
        {
          label: 'Next Week',
          range: () => ({
            startDate: defineds.startOfNextWeek,
            endDate: defineds.endOfNextWeek,
          }),
        },
        {
          label: 'This Month',
          range: () => ({
            startDate: new Date(),
            endDate: defineds.endOfMonth,
          }),
        },
        {
          label: 'Next Month',
          range: () => ({
            startDate: defineds.startOfNextMonth,
            endDate: defineds.endOfNextMonth,
          }),
        },
      ];
    return definedRanges
  }

function Header({position, placeholder}: {position: number, placeholder?: string}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);
    const router = useRouter()
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      } 
    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const handleAdultsCount = (e) => {
        if (e.target.value < 1) setAdultsCount(1);
        else setAdultsCount(e.target.value);
    }
    const handleChildrenCount = (e) => {
        if (e.target.value < 1) setChildrenCount(1);
        else setChildrenCount(e.target.value);
    }
    const resetInput = () => {
        setSearchInput("")
    }

    const handleSearch = () => {
        console.log("searched.")
        router.push({
          pathname: '/search',
          query: {
            location: searchInput.toLowerCase().trim(),
            startDate: startDate.toISOString().slice(0,10),
            endDate: endDate.toISOString().slice(0,10),
            adultsCount,
            childrenCount
          }
        })
        setSearchInput('');
    }

    const definedRanges = sidedefinedDateRangeOptions();
    const staticRanges = [
        // ...defaultStaticRanges,
        ...createStaticRanges(definedRanges)
      ];

    const renderStaticRangeLabel = () => (
    <p>Choose a predefined Date: </p>
    );

    return (
        <header id="headerContainer" className={`transition ${position === 0 ? 'bg-black bg-opacity-0 text-gray-100' : 'bg-white shadow-md bg-opacity-100'} easy-out duration-200 sticky top-0 z-50  py-5 px-5 md:px-10` }>
            <div className="max-w-7xl mx-auto grid grid-cols-3 ">
                {/* Header Start */}
                <div className="relative flex h-10 my-auto cursor-pointer">
                    <Image 
                        className=""
                        onClick={onClick => router.push('/')}
                        src={Logo}
                        alt="Airbnb Logo"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>
                {/* Header Middle */}
                <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                    <input
                        value={searchInput}
                        onChange={e => setSearchInput(e.target.value)}
                        className={`${position === 0 ? 'text-white': ''} flex-grow pl-5 bg-transparent outline-none`} 
                        type="text" 
                        placeholder={placeholder !== undefined ? placeholder : 'Where to go?'}
                    />
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
            {searchInput && (
                <div className="relative flex justify-center text-gray-500">
                    <div className="absolute flex flex-col space-y-1 mx-auto rounded-xl top-8 border-2 bg-white">
                        <div className ="flex flex-wrap items-start justify-center sm:justify-start">
                            <div className ="hidden sm:flex sm: flex-col px-1 justify-start max-w-[195px]">
                                <h4 className="font-semibold p-4">When to travel?</h4>
                                
                                <DefinedRange 
                                    onChange={handleSelect}
                                    ranges={[selectionRange]}
                                    rangeColors={[`#FD5B61`]}
                                    inputRanges={[{
                                        label: 'days starting today',
                                        range(value) {
                                          const today = new Date();
                                          return {
                                            startDate: today,
                                            endDate: addDays(today, Math.max(Number(value), 1) - 1),
                                          };
                                        },
                                        getCurrentValue(range) {
                                          if (!isSameDay(range.startDate, defineds.startOfToday)) return '-';
                                          if (!range.endDate) return '∞';
                                          return differenceInCalendarDays(range.endDate, defineds.startOfToday) + 1;
                                        },
                                      }]}
                                     staticRanges={staticRanges}
                                />
                            </div>
                            <div className ="flex flex-shrink-0 justify-center">
                                <DateRange
                                    showSelectionPreview={true}
                                    showMonthAndYearPickers={true}
                                    ranges={[selectionRange]}
                                    onChange={handleSelect}
                                    minDate={new Date()}
                                    months={1}
                                    direction={`vertical`}
                                    rangeColors={[`#FD5B61`]}
                                />
                            </div>
                        </div>
                        <div className="p-5 flex items-center border-b">
                            <div className="px-5 flex flex-grow items-center">
                                <h2 className="font-semibold flex-grow">AdultsCount</h2>
                                <UsersIcon className="h-5 px-2  " />
                                <input value={adultsCount} onChange={handleAdultsCount} className="w-12 pl-2 text-lg outline-none bg-gray-100 border-2 rounded-lg" type="number" />
                            </div>
                            <div className="px-5 flex flex-grow items-center">
                                <h2 className="font-semibold flex-grow">Kids</h2>
                                <UsersIcon className="h-5 px-2  " />
                                <input value={childrenCount} onChange={handleChildrenCount} className="w-12 pl-2 text-lg outline-none bg-gray-100 border-2 rounded-lg" type="number" />
                            </div>
                        </div>
                        <div className="p-5 flex space-x-2 items-center ">
                            <div className="flex flex-grow">
                                <button onClick={resetInput} className=" px-5 py-2 bg-white rounded-md flex-grow text-gray-500">
                                    Cancel
                                </button>
                            </div>
                            <div className="flex flex-grow ">
                               
                                <button onClick={handleSearch} className="px-5 py-2 bg-red-400 rounded-md flex-grow text-white font-semibold hover:bg-red-500">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
