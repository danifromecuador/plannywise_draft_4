import { Index } from "./time"

export const addCompletedTask = (set, input) => {
  set((state) => ({
    tasks: {
      ...state.tasks,
      dones: [...state.tasks.dones, { index: Index(), content: input }]
    }
  }))
}