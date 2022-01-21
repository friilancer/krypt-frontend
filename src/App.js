import Home from './components/home/homePage';
import SignUp from './components/auth/signUp';
import SignIn from './components/auth/signIn';
import Booking from './components/booking/bookingPage'
import User from './components/user/user'
import Gallery from './components/gallery/gallery';
import Rooms from './components/rooms/rooms';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ProtectedRoute } from './controllers/protectedRoute/protectedRoute';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute path='/booking' component={Booking} exact />
          <ProtectedRoute path='/user:id' component={User} exact />
          <Route path='/signup' component={SignUp} exact />
          <Route path='/signin' component={SignIn} exact />
          <Route path='/gallery' component={Gallery} exact />
          <Route path='/rooms' component={Rooms} exact />
          
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
