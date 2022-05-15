import counterObervable from "../../mobx/observable/counter";

const CounterButtons = () => {
 const clickHandler = (type = "add") => {
  if (type === "add") counterObervable.add()
  else counterObervable.reduce()
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
