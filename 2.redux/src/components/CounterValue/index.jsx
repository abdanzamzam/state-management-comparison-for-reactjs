import {useSelector} from "react-redux";

const CounterValue = () => {
 const count = useSelector(state => state)

 console.log("render value...")

 return (
     <strong>Counter: {count}</strong>
 )
}

export default CounterValue
