import { getDateStr } from "./time"

export const dailyAddTodo = (set, input) => {
  const todo = {
    index: parseInt(Object.values(getDateStr()).join("")),
    content: input
  }
  set((state) => ({
    daily: {
      ...state.daily,
      todos: [...state.daily.todos, todo]
    }
  }))
}

export const dailyMarkTodoAsDone = (set, element) => {
  const dailyTodos = JSON.parse(localStorage.getItem("dailyTodos"))
  const newDailyTodos = dailyTodos.filter(e => e.index !== element.index)
  set((state) => ({
    daily: {
      ...state.daily,
      todos: newDailyTodos,
      dones: [...state.daily.dones, element]
    }
  }))
}
