import { getDateNum } from "./time.js"

export const interval = 15

export const setState = (set) => {
  set((state) => ({
    alarm: {
      ...state.alarm,
      state: state.alarm.state === "ON" ? "OFF" : "ON",
      stateMessage: state.alarm.stateMessage === "off" ? "on" : "off"
    }
  }))
}

export const nextInterval = () => {
  let { h, m } = getDateNum()
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
  set((state) => ({
    alarm: {
      ...state.alarm,
      nextInterval: nextInterval()
    }
  }))
}