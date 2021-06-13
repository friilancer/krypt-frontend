import {Fragment} from 'react';
import scene from '../../img/scene.png'

const SignUp = () => {
	return (
		<>
			<div className="max-w-md sm:relative sm:top-10 sm:border-b-2 sm:border-gray-300 sm:rounded-xl sm:pb-10 mx-auto">
				<span className="relative top-5 font-bold mx-3 text-2xl font-serif text-blue-600">Starlit</span>
				<div>
					<img src={scene} className="max-h-48 w-full" alt="" />
				</div>
				<div className="relative bottom-2 h-5 rounded-full bg-white"></div>
				<form className="mx-3 grid place-items-center">
					<h1 className="text-3xl place-self-start mb-4 text-blue-900 font-semibold">
						Sign up
					</h1>
					<div className= "place-self-start w-full sm:grid sm:gap-x-2 sm:grid-cols-2">
						<div className="my-1">
							<label className="text-blue-900 font-medium">First Name</label>
							<input 
								className="bg-blue-50 rounded-md border my-1 w-full px-1 py-1" 
								type="text"
								placeholder="John"
							/>
						</div>
						<div className="my-1">
							<label className="text-blue-900 font-medium my-0.5">Last Name</label>
							<input 
								className="bg-blue-50 my-1 rounded-md border w-full px-1 py-1" 
								type="text"
								placeholder="Doe"
							/>
						</div>
					</div>
					<label className="text-blue-900 font-medium place-self-start">Email</label>
					<input 
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="email"
						placeholder="john@xyz.com"
					/>
					<label className="text-blue-900 font-medium place-self-start">Password</label>
					<input 
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="password"
						placeholder="Password"
					/>
					<button className="mt-8 w-3/4 hover:bg-blue-900 hover:text-white sm:w-3/5 font-bold border border-blue-900 text-blue-900 rounded-md py-1.5 grid place-self-center">
						Sign up
					</button>
				</form>
			</div>
		</>
	)
};

export default SignUp;