import {observer} from "mobx-react"
import counterObervable from "../../mobx/observable/counter";

const CounterValue = observer(() => {

 console.log("render value...")

 return (
     <strong>Counter: {counterObervable.count}</strong>
 )
})

export default CounterValue
