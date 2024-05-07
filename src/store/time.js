export const getTime = () => {
  const date = new Date()

  const dateNum = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    ms: date.getMilliseconds()
  }

  const dateStr = {
    y: dateNum.y.toString(),
    M: dateNum.M.toString(),
    d: dateNum.d.toString(),
    h: dateNum.h.toString().padStart(2, "0"),
    m: dateNum.m.toString().padStart(2, "0"),
    s: dateNum.s.toString().padStart(2, "0"),
    ms: dateNum.ms.toString().padStart(3, "0")
  }

  return { dateNum, dateStr }
}

export const updateTime = (set) => {
  set((state) => ({
    timeStore: {
      ...state.timeStore,
      time: getTime()
    }
  }))
}
