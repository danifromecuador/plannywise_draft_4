import { getDateStr } from "./time"

export const dailyAddTodo = (set, input) => {
  const todo = {
    index: parseInt(Object.values(getDateStr()).join("")),
    content: input,
    completed: "false"
  }
  set((state) => ({
    daily: {
      ...state.daily,
      todos: [...state.daily.todos, todo]
    }
  }))
}

export const dailyMarkTodoAsDone = (set, index) => {
  console.log(index);
  
}