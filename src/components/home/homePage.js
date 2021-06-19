import {useState, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import sneakPeek from '../../img/6.jpg';

const useWindowSize = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
    	console.log(window.innerWidth)
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

	return(
		<div className={`${size > 921 ? 'home-lg' : 'home'} md:grid py-5 md:py-10 2xl:container`}>
				<nav className="text-white p-3 sm:p-5">
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Rooms</Link>
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Gallery</Link>
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Contact Us</Link>
				</nav>
				<div className="md:grid lg:grid-cols-2">
					<div className="md:h-96">
						<img className="h-full w-3/4" src={sneakPeek} alt="sneak-peek" />
					</div>
					<div className="md:h-96 w-full grid md:relative md:right-20">
						<div className="md:relative md:bottom-2 xl:bottom-5">
							<h2 className="md:text-8xl xl:text-9xl font-thin text-white">Starlit</h2>
							<h2 className="md:text-8xl xl:text-9xl font-thin text-white md:relative md:bottom-2 xl:bottom-5">House</h2>
						</div>
						<div className="text-white mt-3 items-end grid grid-cols-2">
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
							<Link className="place-self-end py-3 px-6 font-bold text-sm bg-transparent border border-white border-2">
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