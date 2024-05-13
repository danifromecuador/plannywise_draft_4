import { Index } from "./time"

export const dailyAddTodo = (set, input) => {
  set((state) => ({
    daily: {
      ...state.daily,
      todos: [...state.daily.todos, { index: Index(), content: input }]
    }
  }))
}

export const dailyMarkTodoAsDone = (set, element) => {
  set((state) => ({
    daily: {
      ...state.daily,
      todos: [...state.daily.todos.filter(e => e.index !== element.index)],
      dones: ([...state.daily.dones, element]).sort((a, b) => a.index - b.index)
    }
  }))
}

export const dailyMarkDoneAsTodo = (set, element) => {
  set((state) => ({
    daily: {
      ...state.daily,
      todos: ([...state.daily.todos, element]).sort((a, b) => a.index - b.index),
      dones: [...state.daily.dones.filter(e => e.index !== element.index)]
    }
  }))
}

