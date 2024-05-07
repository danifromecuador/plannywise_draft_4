import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { interval, nextInterval, updateNextInterval, setAlarmState } from "./alarm.js";
import { getTime, updateTime } from "./time.js";

const createTimeSlice = (set) => ({
  time: getTime(),
  updateTime: () => updateTime(set)
})

const createAlarmSlice = (set) => ({
  alarmState: "ON",
  alarmStateMessage: "off",
  interval: interval,
  nextInterval: nextInterval(),
  updateNextInterval: () => updateNextInterval(set),
  setAlarmState: () => setAlarmState(set)
})

export const store = create(devtools((set) => ({
  alarmStore: createAlarmSlice(set),
  timeStore: createTimeSlice(set)
})))
