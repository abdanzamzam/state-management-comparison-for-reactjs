import './App.css';

// components
import CounterValue from "./components/CounterValue"
import CounterButtons from "./components/CounterButtons"

function App() {
  return (
    <div className="App">
     <CounterValue />
     <CounterButtons/>
    </div>
  );
}

export default App;
