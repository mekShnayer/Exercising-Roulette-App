import ExerciseWheel from './components/ExerciseWheel';
import './App.css';
// import RouletteWheel from './components/RouletteWheel';
import Logo from './components/logo';
import logoPic from './components/logo.png';

function App() {
  return (
    <div className="App">
      <Logo src={logoPic} />
      
      <div> filter-box component: tabata / reps / random</div>
      <div> open personal zone </div>
      <ExerciseWheel />
    </div>
  );
}

export default App;
