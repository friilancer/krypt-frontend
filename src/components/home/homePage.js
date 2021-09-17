import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import sneakPeek from '../../img/6.jpg';

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
		<div className={`${size > 921 ? 'home-lg' : 'home'} h-screen grid grid-rows-auto-2 items-center py-3 md:py-8 3xl:container 3xl:mx-auto`}>
				<nav className="text-white px-3 sm:px-5 py-2 border-b-2 grid grid-cols-2-auto border-white">
					<div className="flex gap-x-3 items-center">
						<Link to='/' className="px-1.5 sm:px-4 font-bold sm:text-lg">Rooms</Link>
						<Link to='/' className="px-1.5 sm:px-4 font-bold sm:text-lg">Gallery</Link>
					</div>
					{
						auth.token ? 
							<Link to="/" className="flex items-center gap-x-2 font-semibold">
								<p className="">{`Hey, ${auth.user.lastName}`}</p>
								<i className="fa fa-user"></i>
							</Link>
						:
							<div className="flex gap-x-3 items-center">
								<Link to='/signin' className="py-1 px-2 sm:py-3 sm:px-6 font-bold text-sm bg-transparent border border-white border-2"> Sign In </Link>
								<Link to='/signup' className="py-1 px-2 sm:py-3 sm:px-6 font-bold text-sm bg-transparent border border-white border-2"> Sign Up </Link>
							</div>
					}
				</nav>
				<div className="grid lg:grid-cols-2">
					{
						size > 921 &&
						<div className="md:h-96">
							<img className="h-full w-3/4" src={sneakPeek} alt="sneak-peek" />
						</div>
					}
					<div className="md:h-96 w-full grid md:relative lg:right-20">
						<div className="relative bottom-5 md:bottom-2 xl:bottom-5">
							<h2 className="md:text-8xl text-center md:text-left text-6xl xl:text-9xl font-semibold md:font-thin text-white">Starlit</h2>
							<h2 className="md:text-8xl text-center md:text-left text-6xl xl:text-9xl font-semibold md:font-thin text-white md:relative md:bottom-2 xl:bottom-5">House</h2>
						</div>
						<div className="text-white mt-3 items-end grid gap-y-8 sm:gap-y-0 sm:grid-cols-2 pl-5 pr-3 sm:px-2">
							<div>
								<p className="text-yellow-400 font-semibold">
								Lorem ipsium Lorem ipsium Lorem ipsium
							</p>
							<p>
								Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium 
								Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium 
								Lorem ipsium Lorem ipsium  
							</p>
							</div>
							<Link to='/booking' className="place-self-end py-3 px-6 font-bold text-sm bg-transparent border border-white border-2">
								Book A Room
							</Link>
						</div>
					</div>
				</div>
				<div>
					<section>
						<p>(+234) 8080306440</p>
					</section>
				</div>
		</div>
	)
};

export default Home;