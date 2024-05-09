import { useEffect, useRef, useState } from 'react'
import { store } from '../store/store.js'
import alarmSound from '../../public/alarm.wav'
import { Info } from './Info.jsx'
import './Alarm.css'

export const Alarm = () => {
  const { alarmStore, timeStore } = store()
  const prevMinuteRef = useRef(new Date().getMinutes())
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")
  const [hide3, setHide3] = useState("")

  useEffect(() => {
    const audio = new Audio(alarmSound)
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
  }, [timeStore.time.dateNum.m, alarmStore, timeStore])

  useEffect(() => {
    if (alarmStore.alarmState === "OFF") setHide3("hide")
    else setHide3("")
  }, [alarmStore.alarmState])


  return (
    <div className='Alarm main-component'>
      <div>
        < Info />
        <div className='button' onClick={() => alarmStore.setAlarmState()}>
          <p>Alarm is {alarmStore.alarmState}</p>
          <p>Click to turn {alarmStore.alarmStateMessage}</p>
        </div>
      </div>

      <div className={hide3}>
        <p>Alarm will sound every {alarmStore.interval} minutes</p>
      </div>

      <div className={hide3}>
        <p className={hide1}>Next alarm will sound at {alarmStore.nextInterval.h}:{alarmStore.nextInterval.m}</p>
        <p className={hide2}>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
