import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { interval, nextInterval, updateNextInterval, setState } from "./alarm.js";
import { getDateNum, getDateStr, updateTime } from "./time.js";

const createTimeSlice = (set) => ({
  // getTime: getTime(),
  // updateTime: () => updateTime(set)
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
  dogs:25
})

export const Store = create(devtools((set) => ({
  alarm: createAlarmSlice(set),
  time: createTimeSlice(set),
  todo: createTodoSlice()
})))
