import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { getDateNum, getDateStr, updateTime } from "./time.js"
import { interval, nextInterval, updateNextInterval, setState } from "./alarm.js"
import { daily, weekly, monthly } from "./todo.js"

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

const createTodoSlice = () => ({
  daily: daily(),
  weekly: weekly(),
  monthly: monthly()
})

export const Store = create(devtools((set) => ({
  alarm: createAlarmSlice(set),
  time: createTimeSlice(set),
  todo: createTodoSlice()
})))
