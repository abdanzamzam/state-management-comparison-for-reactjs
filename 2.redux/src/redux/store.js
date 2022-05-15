import {createStore} from "redux";

// reducers
import Counter from "./counter/reducer"

const Store = createStore(Counter)

export default Store
