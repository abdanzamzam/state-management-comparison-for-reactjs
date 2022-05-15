import {useContext} from "react"
import CounterContext from "../../contexts/counter";

const CounterButtons = () => {
 const {count, setCount} = useContext(CounterContext)
 const clickHandler = (type = "add") => {
  if (type === "add") setCount(count + 1)
  else setCount(count - 1)
 }

 console.log("render  button...")

 return (
     <>
      <button onClick={() => clickHandler("add")}>+</button>
      <button onClick={() => clickHandler("reduce")}>-</button>
     </>
 )
}

export default CounterButtons
