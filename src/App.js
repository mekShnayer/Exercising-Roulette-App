import './App.css';
import Logo from './components/logo';
import logoPic from './components/logo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeRoulette from './pages/HomeRoulette';
import Workout from './pages/Workout';
import PersonalZone from './pages/PersonalZone';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <Logo src={logoPic} />
          <div className='change-pages-link'>
            <ul className='link-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/personalZone">Personal Zone</Link></li>
              <li><Link to="/workout">Workout</Link></li>
            </ul>
          </div>
        </div>
        <div className='pages-display'>
          <Switch>
            <Route exact path='/' component={HomeRoulette} />
            <Route exact path='/personalZone' component={PersonalZone} />
            <Route exact path='/workout' component={Workout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
