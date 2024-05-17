import { Index } from "./time"

export const addCompletedTask = (set, interval, input) => {
  set((state) => ({
    tasks: {
      ...state.tasks,
      dones: [...state.tasks.dones, { index: Index(), interval: interval, content: input }]
    }
  }))
}