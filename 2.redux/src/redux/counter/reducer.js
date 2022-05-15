import {ADD, REDUCE} from "./types"

const CounterReducer = (state = 0, action) => {
 switch (action.type) {
  case ADD:
   console.log("add", state)
   return state += 1
  case REDUCE:
   console.log("reduce", state)
   return state -= 1
  default:
   return state
 }
}

export default CounterReducer
