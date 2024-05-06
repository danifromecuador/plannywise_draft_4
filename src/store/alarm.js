export const setAlarmState = (set) => {
  set((state)=>({
    alarmStore: {
      ...state.alarmStore,
      alarmState: state.alarmStore.alarmState === "ON" ? "OFF" : "ON",
      alarmStateMessage: state.alarmStore.alarmStateMessage === "off" ? "on" : "off"
    }
  }))
}