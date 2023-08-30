import React from 'react'
import '../../styles/LockScreen/lockScreen.scss'
import Lock from '../../images/lock.svg'

const LockScreen = (props) => {
    return (
        <div className='container p-5 lockScreen mt-3'>
            <h1 className='titleUpload text-center mb-4'>Hatıraç</h1>
            <img className='mt-2 mb-4' src={Lock} alt='Lock' width={100} />
            <h2>{props.dateDifference.years} <span className='text-mini'>YIL</span> {props.dateDifference.months} <span className='text-mini'>AY</span> {props.dateDifference.days} <span className='text-mini'>GÜN</span></h2>
            <h2 className='mb-4'>{props.dateDifference.hours} <span className='text-mini'>SAAT</span> {props.dateDifference.minutes} <span className='text-mini'>DAKİKA</span></h2>
            <span className='text-mini mt-5'>Sonra Erişime Açılacak</span>
        </div>
    )
}

export default LockScreen
