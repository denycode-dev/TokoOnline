//Import-React:
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../Redux/Store';

//Import-Components:
import Home from '../../Components/Pages/HomeScreen/Home';
import Login from '../../Components/Pages/Login/Login';
import Register from '../../Components/Pages/Register/Register';

//Main-Components:
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>      
    </Provider>
  );
}

export default App;
