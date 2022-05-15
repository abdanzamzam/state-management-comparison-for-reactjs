import './App.css';

import CounterValue from "./components/CounterValue"
import CounterButtons from "./components/CounterButtons"
import Store from "./redux/store";
import {Provider} from "react-redux";

function App() {
 return (
     <Provider store={Store}>
      <div className="App">
       <CounterValue/>
       <CounterButtons/>
      </div>
     </Provider>
 );
}

export default App;
