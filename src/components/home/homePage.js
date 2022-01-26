import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Link as ScrollLink } from 'react-scroll'
import sneakPeek from '../../img/1.jpg';
import doubleDeluxeRoomImage from '../../img/14.jpg'
import deluxeRoomImage from '../../img/15.jpg'
import singleRoomImage from '../../img/16.jpg'
import suiteImage from '../../img/4.jpg'
import receptionImage from '../../img/12.jpg'

const useWindowSize = () => {
  const [size, setSize] = useState(0);
  
  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const useScrollHeight = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	

	useEffect(() => {

		const handleScroll = () => {
			const position = window.pageYOffset;
			setScrollPosition(position);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll()
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return scrollPosition
}

const Home = () => {

	const size = useWindowSize();
	const height = useScrollHeight()
	const auth  = useSelector(state => state.auth);
	const [activePage, setActivePage] = useState('')
	const [previousPage, setPreviousPage] = useState('')

	useEffect(() => {
		setActivePage('home')
	}, [])

	useEffect(() => {
		if(height < 100){
			setActivePage('home') 
			setPreviousPage('')
		}
	}, [height])

	const animatePage = (next, prev='home') => {
		if(size > 761){
			setActivePage(next)
			setPreviousPage(prev)
		}
	}
	return(
		<>
			<div name='home' className={`
				${size > 1021 ? 'home-lg' : 'home'} 
				${activePage === 'home' ? 'md:animate-zoomIn md:delay-1000' : ''} 
				${previousPage === 'home' ? 'md:animate-zoomOut md:delay-0' : ''} 
				h-screen grid w-screen max-w-fit grid-rows-auto-2 items-center py-3 md:py-8 `}>
				<nav className="text-gray-800 px-3 sm:px-5 py-2 border-b-2 flex items-center justify-between border-gray-800">
					<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
					<div className="flex gap-x-1 items-center text-sm">
						<ScrollLink 
							to='rooms' 
							spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('rooms', 'home')}
							className="md:hidden block px-1 sm:px-4 cursor-pointer font-semibold"
						>
							Rooms
						</ScrollLink>
						<ScrollLink 
							to='gallery' 
							spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('gallery', 'home')}
							className="md:hidden block px-1.5 sm:px-4 cursor-pointer font-semibold"
						>
							Gallery
						</ScrollLink>
					
					{
						auth.token ? 
							<Link to="/user" className="flex px-1.5 sm:px-4 items-center gap-x-2 font-semibold ">
								<p className="">{`Hey, ${auth.user.lastName}`}</p>
								<i className="fa fa-user text-gray-500"></i>
							</Link>
						:
							<div className="flex gap-x-3 sm:gap-x-8 items-center">
								<Link to='/signin' className="py-1 px-2 rounded-md sm:py-2 sm:px-4 font-bold text-sm bg-transparent border border-gray-800 border-2"> Sign In </Link>
								<Link to='/signup' className="py-1 px-2 rounded-md sm:py-2 sm:px-4 font-bold text-sm bg-transparent border border-gray-800 border-2"> Sign Up </Link>
							</div>
					}
					</div>
				</nav>
				<div className="grid md:grid-cols-2-auto lg:grid-cols-3-auto md:px-3 lg:px-0">
					{
						size > 1021 &&
						<div className="md:h-96">
							<img className="h-full w-3/4" src={sneakPeek} alt="sneak-peek" />
						</div>
					}
					<div className="sm:h-96 w-full grid lg:relative lg:right-20">
						<div className="relative bottom-5 md:bottom-2 xl:bottom-5">
							<h2 className="lg:text-8xl text-center lg:text-left text-6xl xl:text-9xl font-semibold lg:font-thin text-gray-800">AXD</h2>
							<h2 className="lg:text-8xl text-center lg:text-left text-6xl xl:text-9xl font-semibold lg:font-thin text-gray-800 lg:relative lg:bottom-2 xl:bottom-5">VILLE</h2>
						</div>
						<div className="text-gray-800 text-center lg:text-left mt-3 items-end grid gap-y-8 sm:gap-y-0 lg:flex lg:justify-between pl-5 pr-3 sm:px-2">
							<div className='basis-2/3' >
								<p className="text-gray-900 font-bold">
									Your comfort is our happiness
								</p>
								<p>
									Take advantage of the serenity, calm and luxury we offer.
									Get the best of services and enjoy your stay. We deliver a total experience
									and inject fun into your stay.
									The best holidays begin here!									
								</p>
							</div>
							<Link to='/booking' className="place-self-end bg-gray-900 hover:bg-black rounded-md py-3 px-4 font-bold text-sm text-white border border-gray-800 border-2">
								Book A Room
							</Link>
						</div>
					</div>
					<aside className='self-center hidden md:flex flex-col gap-y-3 items-end font-semibold px-1'>
						<ScrollLink 
							to='home' 
							spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('home', 'gallery')}
							className={`
							${activePage === 'home' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'} 
							text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
						>
							<div className='text-gray-900 '>Home</div>
							<i className={`
								${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
								fas fa-slash -rotate-[38deg] text-xs`}></i>
							<i className={`
							${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-dot-circle text-xs`}></i>
						</ScrollLink>
						<ScrollLink 
						to='rooms' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('rooms', 'home')}
						className={`
						${activePage === 'rooms' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}						
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Rooms</div>
						<i className={`
							${activePage === 'rooms' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'rooms' ? 'animate-fadeIn delay-1000' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
					<ScrollLink 
						to='gallery' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('gallery', 'home')}
						className={`
						${activePage === 'gallery' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Gallery</div>
						<i className={`
							${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
						
					</aside>
				</div>
				<footer className='max-w-screen-md w-2/3 font-semibold text-sm mx-auto flex items-center justify-center gap-x-5 px-3'>
					<p>ipsium@axdville.com</p>
				</footer>
			</div>
			<div name="rooms" className={
				`${activePage === 'rooms' ? 'md:animate-zoomIn md:delay-1000' : ''} 
				${previousPage === 'rooms' ? 'md:animate-zoomOut md:delay-0' : ''} 
				md:h-screen w-screen lg:py-2 lg:gap-y-3 flex flex-col py-5 md:flex-row mx-auto gap-x-5 gap-y-5 lg:gap-x-10 px-2 sm:px-5`}>
				<section className='self-center flex text-center flex-col gap-y-5'>
					<header className='font-bold text-lg'>
						Rooms
					</header>
					<div>
						All rooms at AXD Ville are air conditioned and come with a TV
						and a  mini fridge.
					</div>
				</section>
				<div className='w-full lg:h-screen lg:w-5/6 items-center flex flex-col gap-y-5'>
					<div className='flex flex-col h-full items-center md:flex-row gap-y-5 gap-x-5'>
						<div className='flex flex-col items-center shadow-lg max-w-sm sm:max-w-xs md:w-60 lg:w-74'>
							<img alt='' src={deluxeRoomImage} className='' />
							<div className='flex flex-col px-1 py-2 gap-y-2.5 xl:gap-y-5 text-sm lg:text-base'>
								<div className='flex justify-between items-center'> 
									<span className='font-semibold'>Deluxe</span>
									<div className='flex gap-x-1.5'>
										<span className='font-semibold text-gray-500'>Price</span>
										<span className='font-semibold'>#5000</span>
									</div>
								</div>
								<div className='text-gray-600'>
									In reprehenderit in consequat magna magna laborum dolor. 
									
								</div>        
								<Link 
									to="/booking"
									className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
								>
									Book a Room
								</Link>
							</div>
						</div>
						<div className='flex flex-col md:relative md:top-28 items-center shadow-lg max-w-sm sm:max-w-xs md:w-60 lg:w-74'>
							<img alt='' src={doubleDeluxeRoomImage} className=''/>
							<div className='flex flex-col px-1 py-2 gap-y-2.5 xl:gap-y-5 text-sm lg:text-base'>
								<div className='flex justify-between items-center'> 
									<span className='font-semibold'>Double Deluxe</span>
									<div className='flex gap-x-1.5'>
										<span className='font-semibold text-gray-500'>Price</span>
										<span className='font-semibold'>#5000</span>
									</div>
								</div>
								<div className='text-gray-600'>
									In reprehenderit in consequat magna magna laborum dolor.	
								</div>        
								<Link 
									to="/booking"
									className="self-center hover:bg-black rounded-md py-3 px-2 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
								>
									Book a Room
								</Link>
							</div>
						</div>
					</div>
					<div className='flex flex-col h-full items-center md:flex-row gap-y-5 gap-x-5'>
						<div className='flex flex-col items-center shadow-lg max-w-sm sm:max-w-xs md:w-60 lg:w-74'>
							<img alt='' src={singleRoomImage} className='' />
							<div className='flex flex-col px-1 py-2 gap-y-2.5 xl:gap-y-5 text-sm lg:text-base'>
								<div className='flex justify-between items-center'> 
									<span className='font-semibold'>Single</span>
									<div className='flex gap-x-1.5'>
										<span className='font-semibold text-gray-500'>Price</span>
										<span className='font-semibold'>#5000</span>
									</div>
								</div>
								<div className='text-gray-600'>
									In reprehenderit in consequat magna magna laborum dolor. 
									
								</div>        
								<Link 
									to="/booking"
									className="self-center hover:bg-black rounded-md py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-gray-800 hover:text-white border border-gray-800 border-2"
								>
									Book a Room
								</Link>
							</div>
						</div>
						<div className='flex flex-col invisible hidden md:block items-center max-w-sm sm:max-w-xs shadow-lg md:w-60 lg:w-74'>
							<img alt='' src={singleRoomImage} className='' />
							<div className='flex flex-col px-1 py-2 gap-y-2.5 xl:gap-y-5 text-sm lg:text-base'>
								<div className='flex justify-between items-center'> 
									<span className='font-semibold'>Single Room</span>
									<div className='flex gap-x-1.5'>
										<span className='font-semibold text-gray-500'>Price</span>
										<span className='font-semibold'>#5000</span>
									</div>
								</div>
								<div className='text-gray-600'>
									In reprehenderit in consequat magna magna laborum dolor. 
									
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
				<aside className='self-center hidden md:flex flex-col gap-y-3 items-end font-semibold px-1'>
					<ScrollLink 
						to='home' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('home', 'rooms')}
						className={`
						${activePage === 'home' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Home</div>
						<i className={`
							${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
					<ScrollLink 
						to='rooms' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('rooms', 'home')}
						className={`
						${activePage === 'rooms' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Rooms</div>
						<i className={`
							${activePage === 'rooms' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'rooms' ? 'animate-fadeIn delay-1000' : ''}
		
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
					<ScrollLink 
						to='gallery' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('gallery', 'rooms')}
						className={`
						${activePage === 'gallery' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Gallery</div>
						<i className={`
							${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>								
				</aside>                    
			</div>
			<div className='grid md:grid-cols-2-auto w-screen min-w-fit'>
				<div name="gallery" className={`
				${activePage === 'gallery' ? 'md:animate-zoomIn md:delay-1000' : ''}
				${previousPage === 'gallery' ? 'md:animate-zoomOut md:delay-0' : ''}  
				flex flex-col sm:h-screen w-full mx-auto`}>
					<div className='flex flex-col md:flex-row gap-y-6 items-center md:items-stretch max-w-screen-xl justify-evenly py-3 my-3 mx-auto w-full'>
					<section className='flex flex-col gap-y-5 md:gap-y-2 self-center items-center xl:gap-y-5 w-2/3 max-w-xs md:w-1/5'>
						<header className='font-semibold text-sm text-center md:text-base'>
							Photos of <span className='text-gray-900'>AXD Ville</span> showing
							their outstanding scenery and
							luxury
						</header>
					    <Link 
							to="/booking"
							className="bg-gray-900 hover:bg-black rounded-md relative md:top-5 py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-white border border-gray-800 border-2"
						>
							Book a Room
					    </Link>
					</section>
                    <div className='w-2/3 max-w-xs md:w-1/5 bgSuiteImage lg:w-1/6 flex flex-col items-center justify-center cursor-pointer'>
                            <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Main Suite</span>
                            <span className='text-sm font-semibold text-center'>Get King-sized treatment</span>
                    </div>
                    <img alt='' src={suiteImage} className='w-0 max-w-xs md:w-1/6 hidden md:invisible md:block'/>
                    <div className='w-2/3 max-w-xs md:w-1/5 bgHallwayImage lg:w-1/6 flex flex-col md:relative md:right-20 items-center justify-center cursor-pointer md:relative md:bottom-2 '>
                            <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Hallway</span>
                            <span className='text-sm font-semibold text-center'>Steppin'</span>
                    </div>
                    <div className='w-2/3 max-w-xs bgRoomImage md:w-1/5 lg:w-1/6 flex flex-col items-center justify-center cursor-pointer md:relative z-10 md:top-16 lg:top-20'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Bedroom</span>
                        <span className='text-sm font-semibold text-center'>Experience relaxation</span>
                    </div>
				</div>
				<div className='flex flex-col md:flex-row items-center gap-y-6 md:items-stretch max-w-screen-xl justify-evenly py-3 my-3 lg:py-1 lg:my-1 mx-auto w-full'>
                    <div className='w-2/3 max-w-xs md:w-1/5 bgDiningImage flex flex-col items-center justify-center cursor-pointer'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Private Dining</span>
                        <span className='text-sm font-semibold text-center'>Eat Healthy</span>
                    </div>
                    <div className='w-2/3 max-w-xs md:w-1/5 bgLandscapeImage flex flex-col items-center justify-center cursor-pointer md:relative z-10 md:top-16 lg:top-20'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Pool side</span>
                        <span className='text-sm font-semibold text-center'>Serene surroundings</span>
                    </div>
					<div className='w-2/3 max-w-xs md:w-1/5 bgRoomPeekImage flex flex-col items-center justify-center cursor-pointer'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Room Image</span>
                        <span className='text-sm font-semibold text-center'>Peek of the ambience</span>
                    </div>
					<img alt='' src={receptionImage} className='w-2/3 max-w-xs md:w-1/5 hidden md:invisible md:block' />
				</div>
				<div className='flex flex-col md:flex-row items-center gap-y-6 md:items-stretch max-w-screen-xl justify-evenly py-3 my-3 lg:py-1 lg:my-1 mx-auto w-full'>
					<img alt='' src={receptionImage} className='w-2/3 max-w-xs md:w-1/5 hidden md:invisible md:block' />
                    <div className='w-2/3 max-w-xs md:w-1/5 flex flex-col items-center jhidden md:invisible md:block'></div>
					<div className='w-2/3 max-w-xs md:w-1/5 bgMassageRoomImage flex flex-col items-center justify-center cursor-pointer'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Massage Rooms</span>
                        <span className='text-sm font-semibold text-center'>Get comfy massages</span>
                    </div>
                    <div className='w-2/3 max-w-xs md:w-1/5 bgReceptionImage h-full md:relative md:bottom-8 lg:bottom-10 flex flex-col items-center justify-center cursor-pointer'>
                        <span className='font-bold text-lg md:text-xl xl:text-2xl text-center'>Reception</span>
                        <span className='text-sm font-semibold text-center'>Welcome to AXD Ville</span>
                    </div>
				</div>
				</div>
				<aside className='self-center hidden w-30 md:flex flex-col relative right-5 gap-y-3 items-end font-semibold px-1'>
					<ScrollLink 
						to='home' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('home', 'gallery')}
						className={`
						${activePage === 'home' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Home</div>
						<i className={`
							${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
							${activePage === 'home' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
					<ScrollLink 
						to='rooms' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('rooms', 'gallery')}
						className={`
						${activePage === 'rooms' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Rooms</div>
						<i className={`
							${activePage === 'rooms' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${previousPage === 'rooms' ? 'animate-fadeOut delay-0' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>
					<ScrollLink 
						to='gallery' 
						spy={true} smooth={true} duration={size > 765 ? 0 : 200} delay={1000} onSetActive={() => animatePage('gallery', 'home')}
						className={`
						${activePage === 'gallery' ? 'text-blue-600 animate-fadeInRight delay-1000 font-bold' : 'text-gray-600'}
						text-sm flex gap-x-1 lg:gap-x-2 items-center cursor-pointer`}
					>
						<div className='text-gray-900 '>Gallery</div>
						<i className={`
							${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
							fas fa-slash -rotate-[38deg] text-xs`}></i>
						<i className={`
						${activePage === 'gallery' ? 'animate-fadeIn delay-1000' : ''}
						fas fa-dot-circle text-xs`}></i>
					</ScrollLink>		
					</aside>
			</div>
		</>
	)
};

export default Home;