import {Link} from 'react-router-dom'
import suiteImage from '../../img/4.jpg'
import receptionImage from '../../img/12.jpg'
import mainRoomImage from '../../img/13.jpg'

const Gallery = () => {
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
                <div className='flex max-w-screen-xl justify-evenly py-3 my-3 mx-auto w-full'>
                    <section className='flex flex-col gap-y-2 self-center items-center xl:gap-y-5 w-1/5'>
                        <header className='font-semibold text-sm text-center md:text-base'>
                            Photos of <span className='text-gray-900'>AXD Ville</span> showing
                            their outstanding scenery and
                            luxury
                        </header>
                        <footer>
                            <Link 
                                to="/booking"
                                className="bg-gray-900 hover:bg-black rounded-md relative top-2 sm:top-5 py-3 px-2 sm:py-3 sm:px-4 font-bold text-sm text-white border border-gray-800 border-2"
                            >
                                Book a Room
                            </Link>
                        </footer>
                    </section>
                    <img alt='' src={suiteImage} className='w-1/5'/>
                    <img alt='' src={suiteImage} className='w-1/5 md:relative md:bottom-2 lg:bottom-4'/>
                    <img alt='' src={mainRoomImage} className='w-1/5 md:relative z-10 md:top-16 lg:top-20'/>
                </div>
                <div className='flex max-w-screen-xl justify-evenly py-3 my-3 mx-auto w-full'>
                    <img alt='' src={receptionImage} className='w-1/5'/>
                    <img alt='' src={receptionImage} className='w-1/5 md:relative z-10 md:top-16 lg:top-20'/>
                    <img alt='' src={receptionImage} className='w-1/5'/>
                    <div alt='' src={receptionImage} className='w-1/5 hidden md:block'></div>
                </div>
                <div className='flex max-w-screen-xl justify-evenly py-3 my-3 mx-auto w-full'>
                <div alt='' src={receptionImage} className='w-1/5 hidden md:block'></div>
                    <div alt='' src={receptionImage} className='w-1/5 hidden md:block'></div>
                    <img alt='' src={receptionImage} className='w-1/5'/>
                    <img alt='' src={receptionImage} className='w-1/5 md:relative md:bottom-8 lg:bottom-10'/>
                </div>
            </div>
        </>
    )
}

export default Gallery