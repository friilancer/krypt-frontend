
import {useState, Fragment} from 'react';
import scene from '../../img/scene.png';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

const SignUp = () => {
	const [inputOptions, setInputOptions] = useState({
		firstName: '',
		lastName:'',
		phoneNumber:'',
		signUpEmail:'',
		signUpPassword:''
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const onChangeHandler = (e) => setInputOptions({
		...inputOptions,
		[e.target.name] : e.target.value
	})

	const submitHandler = async(e) => {
		e.preventDefault();
		try{
			let {data} =  await axios.post('/api/guest/register', {
				firstName: inputOptions.firstName,
				lastName: inputOptions.lastName,
				phoneNumber: inputOptions.phoneNumber,
				email : inputOptions.signUpEmail,
				password: inputOptions.signUpPassword
			})

			let {token, user} = data;
			dispatch({type:'LOGIN_USER', payload:{token, user}});
			return history.push('/')
		}catch(e){
			return console.error(e)
		}	
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
						Sign up
					</h1>
					<div className= "place-self-start w-full sm:grid sm:gap-x-2 sm:grid-cols-2">
						<div className="my-1">
							<label htmlFor="firstName" className="text-blue-900 font-medium">First Name</label>
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
							<label htmlFor="lastName" className="text-blue-900 font-medium my-0.5">Last Name</label>
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
					<label htmlFor="phoneNumber" className="text-blue-900 font-medium place-self-start">Phone Number</label>
					<input
						id="phoneNumber"
						name="phoneNumber"
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="number"
						placeholder="080xx"
						value={inputOptions.phoneNumber}
						onChange={onChangeHandler}
					/>
					<label htmlFor="signUpEmail" className="text-blue-900 font-medium place-self-start">Email</label>
					<input
						id="signUpEmail"
						name="signUpEmail"
						className="my-1 rounded-md bg-blue-50 border w-full px-1 py-1" 
						type="email"
						placeholder="john@xyz.com"
						value={inputOptions.signUpEmail}
						onChange={onChangeHandler}
					/>
					<label htmlFor="signUpPassword" className="text-blue-900 font-medium place-self-start">Password</label>
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
					<button className="mt-4 w-3/4 hover:bg-red-700 hover:text-white sm:w-3/5 border border-red-800 text-red-700 rounded-md py-1.5 grid place-self-center">
						<i className="fa fa-google font-bold py-1">&nbsp; <strong>Sign in with Google</strong></i>
					</button>
				</div>
			</div>
		</>
	)
};

export default SignUp;