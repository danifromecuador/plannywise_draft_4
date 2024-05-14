import { useEffect, useRef, useState } from 'react'
import { Store } from '../store/store.js'
import alarmSound from '../../public/alarm.wav'
import { Info } from './Info.jsx'
import './Alarm.css'

export const Alarm = () => {
  const { alarm, time } = Store()
  const prevMinuteRef = useRef(new Date().getMinutes())
  const [hide1, setHide1] = useState("")
  const [hide2, setHide2] = useState("hide")
  const [hide3, setHide3] = useState("")

  useEffect(() => {
    const audio = new Audio(alarmSound)
    alarm.updateNextInterval()
    const intervalId = setInterval(() => {
      const currentMinute = new Date().getMinutes()
      if (prevMinuteRef.current !== currentMinute) {
        time.updateTime()
        if (currentMinute % alarm.interval === 0 && alarm.state === "ON") {
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
  }, [time.num.m])

  useEffect(() => {
    if (alarm.state === "OFF") setHide3("hide")
    else setHide3("")
  }, [alarm.state])


  return (
    <div className='Alarm main-component'>
      <div>
        < Info />
        <div className='button' onClick={() => alarm.setState()}>
          <p>Alarm is {alarm.state}</p>
          <p>Click to turn {alarm.stateMessage}</p>
        </div>
      </div>

      <div className={hide3}>
        <p>Alarm will sound every {alarm.interval} minutes</p>
      </div>

      <div className={hide3}>
        <p className={hide1}>Next alarm will sound at {alarm.nextInterval.h}:{alarm.nextInterval.m}</p>
        <p className={hide2}>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
