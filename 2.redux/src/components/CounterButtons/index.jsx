import { add, reduce } from "../../redux/counter/actions"
import {useDispatch} from "react-redux";

const CounterButtons = () => {
 const Dispatch = useDispatch()

 const clickHandler = (type = "add") => {
  if(type === "add") return Dispatch(add())
  else return Dispatch(reduce())
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
