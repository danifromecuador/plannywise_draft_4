import { useEffect, useRef } from 'react'
import { store } from '../store/store.js'
import './Alarm.css'

export const Alarm = () => {
  const { alarmStore, timeStore } = store()
  const prevSecondRef = useRef(new Date().getSeconds())

  // update time each second, avoid updating more than necessary
  // console.log("  Alarm was rendered")

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSecond = new Date().getSeconds()
      if (prevSecondRef.current !== currentSecond) {
        timeStore.updateTime()
        prevSecondRef.current = currentSecond
      }
    }, 500)
    return () => clearInterval(intervalId)
  }, [timeStore.time.dateNum.m])

  useEffect(() => {
    alarmStore.updateNextInterval()
  }, [timeStore.time.dateNum.m])

  return (
    <div className='Alarm main-component'>
      <div>
        <div className='asd'>?</div>
        <div className='button' onClick={() => alarmStore.setAlarmState()}>
          <p>Alarm is {alarmStore.alarmState}</p>
          <p>Click to turn {alarmStore.alarmStateMessage}</p>
        </div>
      </div>
      <div>
        <p>Alarm will sound every {alarmStore.interval} minutes</p>
        <p>{timeStore.time.dateStr.h}:{timeStore.time.dateStr.m}</p>
      </div>
      <div>
        <p>Next alarm will sound at {alarmStore.nextInterval.h}:{alarmStore.nextInterval.m}</p>
        <p className='hide'>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
