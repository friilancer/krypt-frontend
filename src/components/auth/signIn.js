
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import GoogleSignIn from './googleSignIn/button';
import {Link} from 'react-router-dom';
import Nav from '../nav/nav';

const SignIn = () => {
	const [inputOptions, setInputOptions] = useState({
		signInEmail:'',
		signInPassword:''
	});

	const [loginError, setLoginError] = useState(false)

	const {token} =  useSelector(state => state.auth)
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const redirect = () => {
		!location.state ? history.push('/') : location.state.from ? history.push(location.state.from) : history.push('/')
	}
	
	const onChangeHandler = (e) => setInputOptions({
		...inputOptions,
		[e.target.name] : e.target.value
	})

	useEffect(() => {
		const verifyLogin = () => {
			if(token){
				redirect()
			}
		}		
		verifyLogin()
	},[token])

	const submitHandler = async(e) => {
		e.preventDefault();
		try{
			let {data} = await axios.post('https://kryptbackend.herokuapp.com/api/guest/login', {
				email : inputOptions.signInEmail,
				password: inputOptions.signInPassword
			})
			let {token, user} = data;
			setLoginError(false)
			dispatch({type:'LOGIN_USER', payload:{token, user}});
			redirect()
		}catch(e){
			return setLoginError(true)
		}
	}

	return (
		<>
			<Nav />
			<div className='md:animate-fadeIn flex flex-col justify-center w-screen'>
				<div className="max-w-md w-full grid bg-white shadow-md sm:border-b-2 sm:border-gray-300 sm:rounded-xl py-5 px-1 my-10 sm:my-20 mx-auto">				
					<form className="mx-3 grid place-items-center ">
						<h1 className="text-xl place-self-start mb-4 text-gray-900 font-semibold">
							Log In
						</h1>	
						{loginError && <h3 className="text-sm text-red-500 font-medium place-self-start">Invalid login credentials</h3>}
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
					<GoogleSignIn loginError={loginError} setLoginError={setLoginError} redirect={redirect}/>
				</div>
				</div>
			</div>
		</>
	)
};

export default SignIn;