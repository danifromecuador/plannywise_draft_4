import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { setAlarmState } from "./alarm";

const createAlarmSlice = (set) => ({
  alarmState: "ON",
  alarmStateMessage: "off",
  interval: 15,
  setAlarmState: () => setAlarmState(set)
})

export const store = create(devtools((set) => ({
  alarmStore: createAlarmSlice(set)
})))
