
import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import GoogleSignIn from './googleSignIn/button';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;

const SignUp = () => {
	const [inputOptions, setInputOptions] = useState({
		firstName: '',
		lastName:'',
		phoneNumber:'',
		signUpEmail:'',
		signUpPassword:''
	});

	const [loginError, setLoginError] = useState(false)
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const redirect = () => {
		return !location.state ? history.push('/') : location.state.from ? history.push(location.state.from) : history.push('/')
	}

	const onChangeHandler = (e) => setInputOptions({
		...inputOptions,
		[e.target.name] : e.target.value
	})

	const submitHandler = async(e) => {
		e.preventDefault();
		try{
			let {data} =  await axios.post('https://kryptbackend.herokuapp.com/api/guest/register', {
				firstName: inputOptions.firstName,
				lastName: inputOptions.lastName,
				phoneNumber: inputOptions.phoneNumber,
				email : inputOptions.signUpEmail,
				password: inputOptions.signUpPassword
			})

			let {token, user} = data;
			dispatch({type:'LOGIN_USER', payload:{token, user}});
			redirect()
		}catch(e){
			return console.error(e)
		}	
	}

	return (
		<>
			<div className='md:animate-fadeIn flex flex-col justify-center min-h-screen sm:h-screen w-screen form-page'>
				<nav className='fixed top-0 w-full mx-auto px-3 sm:px-5 py-2 pt-10 border-b-2 border-gray-900'>
					<div className='flex items-center justify-between'>
						<span className='px-1.5 sm:px-4 font-bold sm:text-xl'>AXD</span>
						<Link to="/" className='px-1.5 sm:px-4 font-semibold'>Home</Link>
					</div>
				</nav>
				<div className="max-w-md w-full grid items-center bg-white sm:border-b-2 sm:border-gray-300 sm:rounded-xl pb-5 sm:pb-10 mx-auto">
					<form className="mx-3 grid place-items-center">
						<h1 className="text-xl place-self-start mb-4 text-gray-900 font-semibold">
							Sign up
						</h1>						
						{loginError && <h3 className="text-sm text-red-500 font-medium place-self-start">Invalid login credentials</h3>}
						<div className= "place-self-start w-full sm:grid sm:gap-x-2 sm:grid-cols-2">
							<div className="my-1">
								<label htmlFor="firstName" className="text-gray-900 font-medium">First Name</label>
								<input
									id="firstName"
									name="firstName" 
									className="bg-blue-50 rounded-md border my-1 w-full px-1 py-1" 
									type="text"
									placeholder="John"
									value={inputOptions.firstName}
									onChange={onChangeHandler}
								/>
							</div>
							<div className="my-1">
								<label htmlFor="lastName" className="text-gray-900 font-medium my-0.5">Last Name</label>
								<input
									id="lastName"
									name="lastName" 
									className="bg-blue-50 my-1 rounded-md border w-full px-1 py-1" 
									type="text"
									placeholder="Doe"
									value={inputOptions.lastName}
									onChange={onChangeHandler}
								/>
							</div>
						</div>
						<label htmlFor="phoneNumber" className="text-gray-900 font-medium place-self-start">Phone Number</label>
						<input
							id="phoneNumber"
							name="phoneNumber"
							className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
							type="number"
							placeholder="080xx"
							value={inputOptions.phoneNumber}
							onChange={onChangeHandler}
						/>
						<label htmlFor="signUpEmail" className="text-gray-900 font-medium place-self-start">Email</label>
						<input
							id="signUpEmail"
							name="signUpEmail"
							className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
							type="email"
							placeholder="john@xyz.com"
							value={inputOptions.signUpEmail}
							onChange={onChangeHandler}
						/>
						<label htmlFor="signUpPassword" className="text-gray-900 font-medium place-self-start">Password</label>
						<input
							id="signUpPassword"
							name="signUpPassword" 
							className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
							type="password"
							placeholder="Password"
							value={inputOptions.signUpPassword}
							onChange={onChangeHandler}
						/>
						<button 
							type="submit" 
							onClick={submitHandler} 
							className="mt-8 w-3/4 hover:bg-blue-900 hover:text-white sm:w-3/5 font-bold border border-blue-900 text-blue-900 rounded-md py-1.5 grid place-self-center"
						>
							Sign up
						</button>
					</form>
					<div className="mx-3 grid place-items-center">
						<GoogleSignIn loginError={loginError} setLoginError={setLoginError} redirect={redirect}/>
					</div>
				</div>
			</div>
		</>
	)
};

export default SignUp;