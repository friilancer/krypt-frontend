import {Fragment} from 'react';
import {Link} from 'react-router-dom'
import sneakPeek from '../../img/6.jpg'

const Home = () => {
	return(
		<div className="homeHero md:grid py-5 md:py-10 2xl:container">
				<nav className="text-white p-3 sm:p-5">
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Rooms</Link>
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Gallery</Link>
					<Link to='/' className="inline-block px-2 sm:px-4 font-bold text-lg">Contact Us</Link>
				</nav>
				<div className="md:grid md:grid-cols-2">
					<div className="md:h-96">
						<img className="h-full w-3/4" src={sneakPeek} alt="sneak-peek" />
					</div>
					<div className="md:h-96 w-full md:relative md:right-20">
						<div className="md:relative md:bottom-5">
							<h2 className="text-9xl font-thin text-white">Starlit</h2>
							<h2 className="text-9xl font-thin text-white">House</h2>
						</div>
						<div className="text-white mt-3 grid grid-cols-2">
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