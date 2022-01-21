import {useEffect, useState, useRef} from 'react';
import googleIcon from '../../../img/btn_google_light_normal_ios.svg';
import { useDispatch } from 'react-redux';
import axios from 'axios'

const loadGoogleScript = () => {
  
    // Loads the Google JavaScript Library
    (function () {
        const id = 'google-js';
        const src = 'https://apis.google.com/js/platform.js'; 
        
        // We have at least one script (React)
        const firstJs = document.getElementsByTagName('script')[0]; 
      
        
        const js = document.createElement('script'); // (Ref. 4)
        js.id = id;
        js.src = src;
        js.onload = window.onGoogleScriptLoad; // (Ref. 5)
        firstJs.parentNode.insertBefore(js, firstJs);
    }());    
    
}

const GoogleSignIn = ({loginError, setLoginError, redirect}) => {
    const [_, setGapi] = useState();
    const dispatch = useDispatch();
    const googleAuthButton = useRef(null)

    const onFailure = () => {
        setLoginError(true)
    }

    const verifyUser = async(id_token) => {
      try{
        const {data} = await axios.post('/api/guest/verify/googleUser', {
          token:id_token
        })
        let {token, user} = data;
        loginError && setLoginError(false)
			  dispatch({type:'LOGIN_USER', payload:{token, user}});
        redirect()
        return;
      }catch(e){
        setLoginError(true)
      }
    }

    const onSignIn = (googleUser) => {
        let token = googleUser.getAuthResponse().id_token
        verifyUser(token);
    }

    useEffect(() => {
    
        // Window.gapi is available at this point
        window.onGoogleScriptLoad = () => { // (Ref. 1)
         
          const _gapi = window.gapi; // (Ref. 2)
          setGapi(_gapi);
          
          _gapi.load('auth2', () => { // (Ref. 3)
            (async () => { 
              const _googleAuth = await _gapi.auth2.init({ // (Ref. 4)
               client_id: `220763992748-o1ilh0kbsgoqo0p0d5acg46i5vu19u0k.apps.googleusercontent.com`,
               cookiepolicy: 'single_host_origin',
               'scope': 'profile email',
              });
              _googleAuth.attachClickHandler(googleAuthButton.current, {}, onSignIn, onFailure)
            })();
          });
        }
        
        // Ensure everything is set before loading the script
        loadGoogleScript(); // (Ref. 9)
        
    }, []);


    return (
        <>
          <div 
            className="flex items-center gap-x-5 mt-8 w-3/4 sm:w-3/5 cursor-pointer font-semibold border border-b-gray-400 text-gray-500 rounded-md" 
            ref={googleAuthButton}
          >
            <img src={googleIcon}/>
            <span>Sign in with Google</span>
          </div>        
        </>
    );
}

export default GoogleSignIn;