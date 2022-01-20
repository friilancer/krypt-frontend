import Home from './components/home/homePage';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';
import Booking from './components/booking/bookingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './controllers/protectedRoute/protectedRoute';
import './App.css';
import {Provider, useDispatch} from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute path='/booking' component={Booking} />
          <Route path='/signup' component={SignUp} />
           <Route path='/signin' component={SignIn} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
