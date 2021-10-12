
import {useState, Fragment, useEffect} from 'react';
import scene from '../../img/scene.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router';
import GoogleSignIn from './googleSignIn/button';

const SignIn = () => {
	const [inputOptions, setInputOptions] = useState({
		signInEmail:'',
		signInPassword:''
	});

	const [loginError, setLoginError] = useState(false)

	const auth =  useSelector(state => state.auth)
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
			if(auth.token){
				redirect()
			}
		}		
		verifyLogin()
	},[auth])

	const submitHandler = async(e) => {
		e.preventDefault();
		try{
			let {data} = await axios.post('/api/guest/login', {
				email : inputOptions.signInEmail,
				password: inputOptions.signInPassword
			})
			let {token, user} = data;
			setLoginError(false)
			dispatch({type:'LOGIN_USER', payload:{token, user}});
			return !location.state ? history.push('/') : location.state.from ? history.push(location.state.from) : history.push('/');
		}catch(e){
			return setLoginError(true)
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
		</>
	)
};

export default SignIn;