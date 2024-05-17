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

export const previousInterval = () => {
  let { h, m } = getDateNum()
  let [hi, mi, hf, mf] = [h, 0, h, 0]
  mf = m - m % 15
  mi = mf - 15
  if (mf === 0) {
    mi = 45
    hi -= 1
    if (hf === 0) hi = 23
  }
  return {
    hi: hi.toString().padStart(2, "0"),
    mi: mi.toString().padStart(2, "0"),
    hf: hf.toString().padStart(2, "0"),
    mf: mf.toString().padStart(2, "0")
  }
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