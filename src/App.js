import ExerciseWheel from './components/ExerciseWheel';
import './App.css';
// import RouletteWheel from './components/RouletteWheel';
// import Logo from './components/logo';
// import 'logo.jpg';

function App() {
  return (
    <div className="App">
      {/* <Logo src='' /> */}
      <div> logo component: will power</div>
      <div> filter-box component: tabata / reps / random</div>
      <div> open personal zone </div>
      <ExerciseWheel />
    </div>
  );
}

export default App;
