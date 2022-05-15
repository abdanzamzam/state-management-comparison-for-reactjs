import React from "react"
import './App.css';

// context
import CounterContext from "./contexts/counter"

// components
import CounterValue from "./components/CounterValue"
import CounterButtons from "./components/CounterButtons"

function App() {
 const [count, setCount] = React.useState(0)

  return (
    <div className="App">
     <CounterContext.Provider value={{
      count,
      setCount
     }}>
      <CounterValue />
      <CounterButtons/>
     </CounterContext.Provider>
    </div>
  );
}

export default App;
