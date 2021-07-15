
import {useState, Fragment} from 'react';
import scene from '../../img/scene.png'

const SignIn = () => {
	const [inputOptions, setInputOptions] = useState({
		signInEmail:'',
		signInPassword:''
	});

	const onChangeHandler = (e) => setInputOptions({
		...inputOptions,
		[e.target.name] : e.target.value
	})

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('Submitted')
	}

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
						Log In
					</h1>	
					<label htmlFor="signInEmail" className="text-blue-900 font-medium place-self-start">Email</label>
					<input
						id="signInEmail"
						name="signInEmail" 
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="email"
						placeholder="john@xyz.com"
						value={inputOptions.signInEmail}
						onChange={onChangeHandler}
					/>
					<label htmlFor="signInPassword" className="text-blue-900 font-medium place-self-start">Password</label>
					<input
						id="signInPassword"
						name="signInPassword" 
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="password"
						placeholder="Password"
						value={inputOptions.signInPassword}
						onChange={onChangeHandler}
					/>
					<button 
						type="submit" 
						onClick={submitHandler} 
						className="mt-8 w-3/4 hover:bg-blue-900 hover:text-white sm:w-3/5 font-bold border border-blue-900 text-blue-900 rounded-md py-1.5 grid place-self-center"
					>
						Log in
					</button>
				</form>
				<div className="mx-3 grid place-items-center">
					<button className="mt-4 w-3/4 hover:bg-red-700 hover:text-white sm:w-3/5 border border-red-800 text-red-700 rounded-md py-1.5 grid place-self-center">
						<i className="fa fa-google font-bold py-1">&nbsp; <strong>Sign in with Google</strong></i>
					</button>
				</div>
			</div>
		</>
	)
};

export default SignIn;