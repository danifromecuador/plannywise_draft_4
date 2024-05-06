import { store } from '../store/store.js'
import './Alarm.css'

export const Alarm = () => {
  const { alarmStore } = store()
  return (
    <div className='Alarm main-component'>
      <div>
        <div className='asd'>?</div>
        <div className='button' onClick={()=>alarmStore.setAlarmState()}>
          <p>Alarm is {alarmStore.alarmState}</p>
          <p>Click to turn {alarmStore.alarmStateMessage}</p>
        </div>
      </div>
      <div>
        <p>Alarm will sound every {alarmStore.interval} minutes</p>
      </div>
      <div>
        <p>Next alarm will sound at 17:15</p>
        <p className='hide'>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
