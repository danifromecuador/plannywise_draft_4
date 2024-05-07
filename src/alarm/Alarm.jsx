import { useEffect, useRef, useState } from 'react'
import { store } from '../store/store.js'
import alarmSound from '../../public/alarm.wav'
import './Alarm.css'

export const Alarm = () => {
  const { alarmStore, timeStore } = store()
  const audio = new Audio(alarmSound)
  const prevMinuteRef = useRef(new Date().getMinutes())
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")

  useEffect(() => {
    alarmStore.updateNextInterval()
    const intervalId = setInterval(() => {
      const currentMinute = new Date().getMinutes()
      if (prevMinuteRef.current !== currentMinute) {
        timeStore.updateTime()
        if (currentMinute % alarmStore.interval === 0 && alarmStore.alarmState === "ON") {
          audio.play()
          setHide1("hide")
          setHide2("")
          setTimeout(() => {
            setHide1("")
            setHide2("hide")
          }, 8000);
        }
        prevMinuteRef.current = currentMinute
      }
    }, 1000)
    return () => clearInterval(intervalId)
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
        <p className={hide1}>Next alarm will sound at {alarmStore.nextInterval.h}:{alarmStore.nextInterval.m}</p>
        <p className={hide2}>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
