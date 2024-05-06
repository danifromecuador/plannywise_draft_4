import './Alarm.css'

export const Alarm = () => {
  return (
    <div className='Alarm main-component'>
      <div>
        <div className='asd'>?</div>
        <div className='button'>
          <p>Alarm is ON</p>
          <p>Click to turn off</p>
        </div>
      </div>
      <div>
        <p>Alarm will sound every 15 minutes</p>
      </div>
      <div>
        <p>Next alarm will sound at 17:15</p>
        <p className='hide'>Alarm is playing right now</p>
        <p className='hide'>Can&apos;t you hear the alarm? Click here</p>
      </div>
    </div>
  )
}
