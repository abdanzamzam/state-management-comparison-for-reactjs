import {useRecoilState} from "recoil"
import counterAtom from "../../recoil/counter/atoms";

const CounterButtons = () => {
 const [value, setValue] = useRecoilState(counterAtom)

 const clickHandler = (type = "add") => {
   setValue(type==="add" ? value + 1 : value - 1)
 }

 console.log("render button...")

 return (
     <>
     <button onClick={() => clickHandler("add")}>+</button>
      <button onClick={() => clickHandler("reduce")}>-</button>
     </>
 )
}

export default CounterButtons
