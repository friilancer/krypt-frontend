import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import sneakPeek from '../../img/1.jpg';

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

const Home = () => {

	const size = useWindowSize();
	const auth  = useSelector(state => state.auth);

	return(
		<div className={`${size > 1021 ? 'home-lg' : 'home'} h-screen grid grid-rows-auto-2 items-center py-3 md:py-8 3xl:container 3xl:mx-auto`}>
				<nav className="text-gray-800 px-3 sm:px-5 py-2 border-b-2 flex items-center justify-between border-gray-800">
					<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
					<div className="flex gap-x-3 items-center">
						<Link to='/rooms' className="px-1.5 sm:px-4 font-semibold">Rooms</Link>
						<Link to='/' className="px-1.5 sm:px-4 font-semibold">Gallery</Link>
					
					{
						auth.token ? 
							<Link to="/" className="flex px-1.5 sm:px-4 items-center gap-x-2 font-semibold ">
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
				<div className="grid lg:grid-cols-2">
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
				</div>
				<footer className='max-w-screen-md w-2/3 font-semibold text-sm mx-auto flex items-center justify-center gap-x-5 px-3'>
					<p>(+234) 00000000</p>
					<p>ipsium@axdville.com</p>
				</footer>
		</div>
	)
};

export default Home;