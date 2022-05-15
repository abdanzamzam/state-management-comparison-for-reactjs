import {useContext} from "react"
import CounterContext from "../../contexts/counter";

const CounterValue = () => {
 const {count} = useContext(CounterContext)

 console.log("render value...")

 return (
     <strong>Counter: {count}</strong>
 )
}

export default CounterValue
