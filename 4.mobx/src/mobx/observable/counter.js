import {action, observable} from "mobx";

const counterObervable = observable({
 count: 0,
 add: action(() => {
  counterObervable.count += 1
 }),
 reduce: action(() => {
  counterObervable.count -= 1
 })
})

export default counterObervable
