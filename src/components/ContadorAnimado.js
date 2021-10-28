import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'


const ContadorAnimado = ({key, timer, animate, children}) => {
    const { stopAnimate } = useContext(SettingContext)
    return (
        <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer % 60}
        colors={[
          ['#0c0e1b', 0.33],
          ['#836FFF', 0.33],
          ['#ffffff', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={ () => {
          stopAnimate()
        }}
      >
        {children}
        </CountdownCircleTimer>
    )
}

export default ContadorAnimado
