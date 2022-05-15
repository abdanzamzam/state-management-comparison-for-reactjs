import useCounterStore from "../../zustand/stores/counter"

const CounterValue = () => {

 const counter = useCounterStore(state => state.count)

 console.log("render value...")

 return (
     <strong>Counter: {counter}</strong>
 )
}

export default CounterValue
