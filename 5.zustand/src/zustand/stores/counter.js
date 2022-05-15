import create from "zustand"

const useCounterStore = create(set => ({
 count: 0,
 add: () => set(state => ({count: state.count + 1})),
 reduce: () => set(state => ({count: state.count - 1})),
}))

export default useCounterStore
