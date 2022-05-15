import useCounterStore from "../../zustand/stores/counter"

const CounterButtons = () => {
 const counterState = useCounterStore(state => state)

 const clickHandler = (type = "add") => {
  if(type==="add") counterState.add()
  else counterState.reduce()
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
