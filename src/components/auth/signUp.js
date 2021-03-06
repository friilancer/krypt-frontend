
import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import GoogleSignIn from './googleSignIn/button';
import Nav from '../nav/nav';

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
			const {firstName, lastName, phoneNumber, signUpEmail, signUpPassword } = inputOptions

			if(!firstName || !lastName || !signUpEmail || !signUpPassword){
				setLoginError(true)
				return;
			}

			let {data} =  await axios.post('https://kryptbackend.herokuapp.com/api/guest/register', {
				firstName,
				lastName,
				phoneNumber,
				email : signUpEmail,
				password: signUpPassword
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
			<Nav />
			<div className='md:animate-fadeIn flex flex-col justify-center w-screen'>
				<div className="max-w-md w-full grid bg-white shadow-md sm:border-b-2 sm:border-gray-300 sm:rounded-xl py-5 my-10 px-1 sm:my-10 mx-auto">
					<form className="mx-3 grid place-items-center">
						<h1 className="text-xl place-self-start mb-4 text-gray-900 font-semibold">
							Sign up
						</h1>						
						{loginError && <h3 className="text-sm text-red-500 font-medium place-self-start">Please fill in all required fields</h3>}
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
									required
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
									required
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
							required
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
							required
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