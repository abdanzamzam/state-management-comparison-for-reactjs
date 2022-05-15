const CounterButtons = () => {
 const clickHandler = (type = "add") => {

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
