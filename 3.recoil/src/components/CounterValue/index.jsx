import {useRecoilState} from "recoil"
import counterAtom from "../../recoil/counter/atoms";

const CounterValue = () => {

 const [value] = useRecoilState(counterAtom)

 console.log("render value...")

 return (
     <strong>Counter: {value}</strong>
 )
}

export default CounterValue
