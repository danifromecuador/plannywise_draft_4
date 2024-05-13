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

export const weeklyAddTodo = (set, input) => {
  set((state) => ({
    weekly: {
      ...state.weekly,
      todos: [...state.weekly.todos, { index: Index(), content: input }]
    }
  }))
}

export const weeklyMarkTodoAsDone = (set, element) => {
  set((state) => ({
    weekly: {
      ...state.weekly,
      todos: [...state.weekly.todos.filter(e => e.index !== element.index)],
      dones: ([...state.weekly.dones, element]).sort((a, b) => a.index - b.index)
    }
  }))
}

export const weeklyMarkDoneAsTodo = (set, element) => {
  set((state) => ({
    weekly: {
      ...state.weekly,
      todos: ([...state.weekly.todos, element]).sort((a, b) => a.index - b.index),
      dones: [...state.weekly.dones.filter(e => e.index !== element.index)]
    }
  }))
}

export const monthlyAddTodo = (set, input) => {
  set((state) => ({
    monthly: {
      ...state.monthly,
      todos: [...state.monthly.todos, { index: Index(), content: input }]
    }
  }))
}

export const monthlyMarkTodoAsDone = (set, element) => {
  set((state) => ({
    monthly: {
      ...state.monthly,
      todos: [...state.monthly.todos.filter(e => e.index !== element.index)],
      dones: ([...state.monthly.dones, element]).sort((a, b) => a.index - b.index)
    }
  }))
}

export const monthlyMarkDoneAsTodo = (set, element) => {
  set((state) => ({
    monthly: {
      ...state.monthly,
      todos: ([...state.monthly.todos, element]).sort((a, b) => a.index - b.index),
      dones: [...state.monthly.dones.filter(e => e.index !== element.index)]
    }
  }))
}