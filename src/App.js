import ExerciseWheel from './components/ExerciseWheel';
import './App.css';
// import RouletteWheel from './components/RouletteWheel';
import Logo from './components/logo';
import logoPic from './components/logo.png';
// import Wheel from './components/wheelCopyLimor';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeRoulette from './pages/HomeRoulette';
import Workout from './pages/Workout';
import PersonalZone from './pages/PersonalZone';

function App() {
  return (
    <Router>
      <div className="App">
        <Logo src={logoPic} />

        <div> filter-box component: tabata / reps / random</div>
        <div> open personal zone </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personalZone">Personal Zone</Link>
          </li>
          <li>
            <Link to="/workout">Workout</Link>
          </li>
        </ul>
        {/* <Wheel /> */}
        <div>
          <Switch>
            <Route exact path='/' component={HomeRoulette}/>
            <Route exact path='/personalZone' component={PersonalZone}/>
            <Route exact path='/workout' component={Workout} />
          </Switch>
        </div>
        <ExerciseWheel />
      </div>
    </Router>
  );
}

export default App;
