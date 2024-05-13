import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { getDateNum, getDateStr, updateTime } from "./time.js"
import { interval, nextInterval, updateNextInterval, setState } from "./alarm.js"
import { dailyAddTodo, dailyMarkTodoAsDone, dailyMarkDoneAsTodo } from "./todo.js"

const createTimeSlice = (set) => ({
  num: getDateNum(),
  str: getDateStr(),
  updateTime: () => updateTime(set)
})

const createAlarmSlice = (set) => ({
  state: "ON",
  stateMessage: "off",
  interval: interval,
  nextInterval: nextInterval(),
  updateNextInterval: () => updateNextInterval(set),
  setState: () => setState(set)
})

const createDailyTodoSlice = (set) => ({
  todos: JSON.parse(localStorage.getItem("dailyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("dailyDones")) || [],
  addTodo: (input) => dailyAddTodo(set, input),
  markTodoAsDone: (element) => dailyMarkTodoAsDone(set, element),
  markDoneAsTodo: (element) => dailyMarkDoneAsTodo(set, element)
})

const createWeeklyTodoSlice = (set) => ({
  todos: [],
  dones: [],
  addTodo: () => weeklyAddTodo(set),
  markTodoAsDone: () => weeklyMarkTodoAsDone(set)
})

const createMonthlyTodoSlice = (set) => ({
  todos: [],
  dones: [],
  addTodo: () => monthlyAddTodo(set),
  markTodoAsDone: () => monthlyMarkTodoAsDone(set)
})

export const Store = create(devtools((set) => ({
  alarm: createAlarmSlice(set),
  time: createTimeSlice(set),
  daily: createDailyTodoSlice(set),
  weekly: createWeeklyTodoSlice(set),
  monthly: createMonthlyTodoSlice(set),
})))
