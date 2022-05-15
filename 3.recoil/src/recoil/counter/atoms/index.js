import {COUNTER_KEY} from "../keys";
import {atom} from "recoil";

const counterAtom = atom({
 key: COUNTER_KEY,
 default: 0
})

export default counterAtom
