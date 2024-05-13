import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { getDateNum, getDateStr, updateTime } from "./time.js"
import { interval, nextInterval, updateNextInterval, setState } from "./alarm.js"
import { 
  dailyAddTodo, dailyMarkTodoAsDone, dailyMarkDoneAsTodo,
  weeklyAddTodo, weeklyMarkTodoAsDone, weeklyMarkDoneAsTodo,
  monthlyAddTodo, monthlyMarkTodoAsDone, monthlyMarkDoneAsTodo,
} from "./todo.js"

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
  markDoneAsTodo: (element) => dailyMarkDoneAsTodo(set, element),
  removeAllCompleted: () => set((state)=>({daily:{...state.daily, dones:[]}}))
})

const createWeeklyTodoSlice = (set) => ({
  todos: JSON.parse(localStorage.getItem("weeklyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("weeklyDones")) || [],
  addTodo: (input) => weeklyAddTodo(set, input),
  markTodoAsDone: (element) => weeklyMarkTodoAsDone(set, element),
  markDoneAsTodo: (element) => weeklyMarkDoneAsTodo(set, element),
  removeAllCompleted: () => set((state)=>({weekly:{...state.weekly, dones:[]}}))
  
})

const createMonthlyTodoSlice = (set) => ({
  todos: JSON.parse(localStorage.getItem("monthlyTodos")) || [],
  dones: JSON.parse(localStorage.getItem("monthlyDones")) || [],
  addTodo: (input) => monthlyAddTodo(set, input),
  markTodoAsDone: (element) => monthlyMarkTodoAsDone(set, element),
  markDoneAsTodo: (element) => monthlyMarkDoneAsTodo(set, element),
  removeAllCompleted: () => set((state)=>({monthly:{...state.monthly, dones:[]}}))
})

export const Store = create(devtools((set) => ({
  alarm: createAlarmSlice(set),
  time: createTimeSlice(set),
  daily: createDailyTodoSlice(set),
  weekly: createWeeklyTodoSlice(set),
  monthly: createMonthlyTodoSlice(set),
})))
