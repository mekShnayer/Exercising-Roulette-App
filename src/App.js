import './App.css';
import Logo from './components/logo';
import logoPic from './components/logo.png';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import HomeRoulette from './pages/HomeRoulette';
import Workout from './pages/Workout';
import PersonalZone from './pages/PersonalZone';
import ThemeContextProvider from './context/ThemeContext';
import Links from './components/Links';
// import ChosenWorkout from './components/workoutFunctionComponent.js';
import GlobalStateContextProvider from './context/GlobalStateContext';
// import { createFactory } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeContextProvider>
          <GlobalStateContextProvider>
            <div className='header'>
              <Logo src={logoPic} />
              <Links /> 
            </div>
            <div className='pages-display'>
              <Switch>
                <Route exact path='/' component={HomeRoulette} />
                <Route exact path='/personalZone' component={PersonalZone} />
                <Route path='/workout' component={Workout} />
              </Switch>
            </div>
          </GlobalStateContextProvider>
        </ThemeContextProvider>
        <p>background photo from <a href='https://www.freepik.com/photos/background'>Background photo created by freepik - www.freepik.com</a></p>
      </div>
    </Router>
  );
}

export default App;


