import './App.css';
import {RecoilRoot} from "recoil"

// components
import CounterValue from "./components/CounterValue"
import CounterButtons from "./components/CounterButtons"

function App() {
 return (
     <RecoilRoot>
      <div className="App">
       <CounterValue/>
       <CounterButtons/>
      </div>
     </RecoilRoot>
 );
}

export default App;
