import {Link} from 'react-router-dom';

const Rooms = () => {
    return (
        <>
            <div className='3xl:container 3xl:mx-auto flex flex-col min-h-screen sm:h-screen w-screen form-page'>
				<nav className='w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900'>
					<div className='flex items-center justify-between'>
						<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
						<div className="flex items-center">
                            <Link to="/" className='px-1.5 sm:px-4 font-semibold'>Home</Link>
                            <Link to="/gallery" className='px-1.5 sm:px-4 font-semibold'>Gallery</Link>  
                        </div>
					</div>
				</nav>
                <div>
                    <section className='flex flex-col gap-y-5'>
                        <header>
                            Room Photos of AXD Ville
                        </header>
                        <div>
                            Lorem Ipsium Lorem Ipsium Lorem Ipsium
                            Lorem Ipsium Lorem Ipsium Lorem Ipsium
                            Lorem Ipsium Lorem Ipsium Lorem Ipsium
                        </div>
                        <footer>
                            <Link 
                                to="/booking"
                                className="bg-gray-900 hover:bg-black rounded-md py-3 px-4 font-bold text-sm text-white border border-gray-800 border-2"
                            >
                                Book a Room
                            </Link>
                        </footer>
                    </section>
                </div>
            </div>
        </>
    )
}



export default Rooms