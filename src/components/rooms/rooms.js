import {Link} from 'react-router-dom';
import doubleDeluxeRoomImage from '../../img/14.jpg'
import deluxeRoomImage from '../../img/15.jpg'
import singleRoomImage from '../../img/16.jpg'

const Rooms = () => {
    return (
        <>
            <div className='3xl:container 3xl:mx-auto flex flex-col min-h-screen sm:h-screen w-screen'>
				<nav className='w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900'>
					<div className='flex items-center justify-between'>
						<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
						<div className="flex items-center">
                            <Link to="/" className='px-1.5 sm:px-4 font-semibold'>Home</Link>
                            <Link to="/gallery" className='px-1.5 sm:px-4 font-semibold'>Gallery</Link>  
                        </div>
					</div>
				</nav>
                <div className='flex flex-col py-5 lg:flex-row max-w-screen-xl mx-auto gap-x-5 gap-y-5 lg:gap-x-10 px-3 sm:px-5'>
                    <section className='self-center flex text-center flex-col gap-y-5'>
                        <header className='font-bold text-lg'>
                            Rooms
                        </header>
                        <div>
                            All rooms at AXD Ville are air conditioned and come with a TV
                            and a  mini fridge.
                        </div>
                    </section>
                    <div className='w-full lg:w-5/6 items-center flex flex-col gap-y-5'>
                        <div className='flex flex-col md:flex-row gap-y-5 gap-x-5'>
                            <div className='flex flex-col items-center shadow-lg max-w-xs'>
                                <img alt='' src={deluxeRoomImage} className='max-w-xs w-full' />
                                <div className='flex flex-col px-1 py-2 gap-y-3 md:gap-y-5 text-sm lg:text-base'>
                                    <div className='flex justify-between items-center'> 
                                        <span className='font-semibold'>Deluxe Room</span>
                                        <div className='flex gap-x-1.5'>
                                            <span className='font-semibold text-gray-500'>Price</span>
                                            <span className='font-semibold'>#5000</span>
                                        </div>
                                    </div>
                                    <div className='text-gray-600'>
                                        In reprehenderit in consequat magna magna laborum dolor. 
                                        Ea do ad mollit do. Maximum occupancy is 2 persons
                                    </div>        
                                    <Link 
                                        to="/booking"
                                        className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
                                    >
                                        Book a Room
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col md:relative md:top-28 items-center shadow-lg max-w-xs'>
                                <img alt='' src={doubleDeluxeRoomImage} className='max-w-xs w-full'/>
                                <div className='flex flex-col px-1 py-2 gap-y-3 md:gap-y-5 text-sm lg:text-base'>
                                    <div className='flex justify-between items-center'> 
                                        <span className='font-semibold'>Double Deluxe Room</span>
                                        <div className='flex gap-x-1.5'>
                                            <span className='font-semibold text-gray-500'>Price</span>
                                            <span className='font-semibold'>#5000</span>
                                        </div>
                                    </div>
                                    <div className='text-gray-600'>
                                        In reprehenderit in consequat magna magna laborum dolor. 
                                        Ea do ad mollit do. Maximum occupancy is 2 persons
                                    </div>        
                                    <Link 
                                        to="/booking"
                                        className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
                                    >
                                        Book a Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-y-5 gap-x-5'>
                            <div className='flex flex-col items-center shadow-lg max-w-xs'>
                                <img alt='' src={singleRoomImage} className='max-w-xs w-full' />
                                <div className='flex flex-col px-1 py-2 gap-y-3 md:gap-y-5 text-sm lg:text-base'>
                                    <div className='flex justify-between items-center'> 
                                        <span className='font-semibold'>Single Room</span>
                                        <div className='flex gap-x-1.5'>
                                            <span className='font-semibold text-gray-500'>Price</span>
                                            <span className='font-semibold'>#5000</span>
                                        </div>
                                    </div>
                                    <div className='text-gray-600'>
                                        In reprehenderit in consequat magna magna laborum dolor. 
                                        Ea do ad mollit do. Maximum occupancy is 2 persons
                                    </div>        
                                    <Link 
                                        to="/booking"
                                        className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
                                    >
                                        Book a Room
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-col invisible hidden md:block items-center shadow-lg max-w-xs'>
                                <img alt='' src={singleRoomImage} className='max-w-xs w-full' />
                                <div className='flex flex-col px-1 py-2 gap-y-3 md:gap-y-5 text-sm lg:text-base'>
                                    <div className='flex justify-between items-center'> 
                                        <span className='font-semibold'>Single Room</span>
                                        <div className='flex gap-x-1.5'>
                                            <span className='font-semibold text-gray-500'>Price</span>
                                            <span className='font-semibold'>#5000</span>
                                        </div>
                                    </div>
                                    <div className='text-gray-600'>
                                        In reprehenderit in consequat magna magna laborum dolor. 
                                        Ea do ad mollit do. Maximum occupancy is 2 persons
                                    </div>        
                                    <Link 
                                        to="/booking"
                                        className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
                                    >
                                        Book a Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}



export default Rooms