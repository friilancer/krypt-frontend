import Home from './components/home/homePage';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';
import Booking from './components/booking/bookingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/booking' component={Booking} />
        <Route path='/signup' component={SignUp} />
         <Route path='/signin' component={SignIn} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
