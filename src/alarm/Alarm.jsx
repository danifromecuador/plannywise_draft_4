import { useEffect, useRef } from 'react'
import { store } from '../store/store.js'
import './Alarm.css'

export const Alarm = () => {
  const { alarmStore, timeStore } = store()
  const prevSecondRef = useRef(new Date().getSeconds())

  // update time each second, avoid updating more than necessary
  console.log(timeStore.time.dateNum.s + "  Alarm was rendered")
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentSecond = new Date().getSeconds()
      if (prevSecondRef.current !== currentSecond) {
        timeStore.updateTime()
        prevSecondRef.current = currentSecond
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [timeStore.time.dateNum.s])

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
        <p>{timeStore.time.dateStr.h}:{timeStore.time.dateStr.m}:{timeStore.time.dateStr.s}</p>
      </div>
      <div>
        <p>Next alarm will sound at 17:15</p>
        <p className='hide'>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
