import { getTime } from "./time.js"

export const interval = 15

export const setAlarmState = (set) => {
  set((state) => ({
    alarmStore: {
      ...state.alarmStore,
      alarmState: state.alarmStore.alarmState === "ON" ? "OFF" : "ON",
      alarmStateMessage: state.alarmStore.alarmStateMessage === "off" ? "on" : "off"
    }
  }))
}

export const nextInterval = () => {
  let { h, m } = getTime().dateNum
  let nextM = 0
  nextM = (Math.floor(m / interval) + 1) * interval
  if (nextM === 60) {
    nextM = 0
    h++
  }
  if (h === 24) h = 0
  return { h: h.toString().padStart(2, "0"), m: nextM.toString().padStart(2, "0") }
}


export const updateNextInterval = (set) => {
  set((state)=>({
    alarmStore: {
      ...state.alarmStore,
      nextInterval: nextInterval()
    }
  }))
}