
import { create } from 'zustand'

interface CounterState {
  value: number
  increment: () => void
  decrement: () => void
}

// TODO: implement increment and decrement actions
const useCounterStore = create<CounterState>((set) => ({
  value: 0,
  increment: () => set((state) => state),
  decrement: () => set((state) => state)
}))

export default useCounterStore
