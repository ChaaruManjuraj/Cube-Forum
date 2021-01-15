import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Root from './components/Root.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import Home from './components/Home.js'
import MyAccount from './components/MyAccount'
import AnonMyAccount from './components/AnonMyAccount.js'
import MyContent from './components/MyContent.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Root} />
          <Route path='/login' render={(props) => <Login {...props} />} />
          <Route path='/register' exact component={Register} />
          <Route path='/home' exact component={Home} />
          <Route path='/myAccount' exact component={MyAccount} />
          <Route path='/anonMyAccount' exact component={AnonMyAccount} />
          <Route path='/myContent' exact component={MyContent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
