export const getDateNum = () => {
  const date = new Date()
  return {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    // h: 23,
    m: date.getMinutes(),
    // m: 45,
    s: date.getSeconds(),
    ms: date.getMilliseconds()
  }
}

export const getDateStr = () => ({
  y: getDateNum().y.toString(),
  M: getDateNum().M.toString().padStart(2, "0"),
  d: getDateNum().d.toString().padStart(2, "0"),
  h: getDateNum().h.toString().padStart(2, "0"),
  m: getDateNum().m.toString().padStart(2, "0"),
  s: getDateNum().s.toString().padStart(2, "0"),
  ms: getDateNum().ms.toString().padStart(3, "0")
})

export const Index = () => parseInt(
  getDateStr().y + getDateStr().M + getDateStr().d + getDateStr().h + getDateStr().m + getDateStr().s + getDateStr().ms
)

export const updateTime = (set) => {
  set((state) => ({
    time: {
      ...state.time,
      num: getDateNum(),
      str: getDateStr()
    }
  }))
}