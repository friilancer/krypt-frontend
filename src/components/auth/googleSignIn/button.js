import {useEffect, useState, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const loadGoogleScript = () => {
  
    // Loads the Google JavaScript Library
    (function () {
        const id = 'google-js';
        const src = 'https://apis.google.com/js/platform.js'; 
        
        // We have at least one script (React)
        const firstJs = document.getElementsByTagName('script')[0]; 
        
        // Prevent script from loading twice
        if (document.getElementById(id)) { return; } // (Ref. 3)
        const js = document.createElement('script'); // (Ref. 4)
        js.id = id;
        js.src = src;
        js.onload = window.onGoogleScriptLoad; // (Ref. 5)
        firstJs.parentNode.insertBefore(js, firstJs);
    }());    
    
}

const GoogleSignIn = ({loginError, setLoginError, redirect}) => {
    const [gapi, setGapi] = useState();
    const [googleAuth, setGoogleAuth] = useState();
    const dispatch = useDispatch();

    const onFailure = () => {
        console.log('Failure')
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

    const renderSigninButton = (_gapi) => { // (Ref. 6)
        _gapi.signin2.render('google-signin', {
          'scope': 'profile email',
          'width': 240,
          'height': 50,
          'longtitle': true,
          'theme': 'dark',
          'onsuccess': onSignIn,
          'onfailure': onFailure 
        });
    }

    useEffect(() => {
    
        // Window.gapi is available at this point
        window.onGoogleScriptLoad = () => { // (Ref. 1)
         
          const _gapi = window.gapi; // (Ref. 2)
          setGapi(_gapi);
          
          _gapi.load('auth2', () => { // (Ref. 3)
            (async () => { 
              const _googleAuth = await _gapi.auth2.init({ // (Ref. 4)
               client_id: `220763992748-o1ilh0kbsgoqo0p0d5acg46i5vu19u0k.apps.googleusercontent.com`
              });
              setGoogleAuth(_googleAuth); // (Ref. 5)
              renderSigninButton(_gapi); // (Ref. 6)
            })();
          });
        }
        
        // Ensure everything is set before loading the script
        loadGoogleScript(); // (Ref. 9)
        
    }, []);

    return (
        <>
          <div id="google-signin"></div>
        </>
    );
}

export default GoogleSignIn;