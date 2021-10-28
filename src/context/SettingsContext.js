import React, { createContext, useState } from 'react' 
import useSound from 'use-sound';
import alarmSong from '../sons/som.wav';


export const SettingContext = createContext()

const SettingContextProvider = (props) => {

    const [play] = useSound(alarmSong, { volume: .10 });
    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)


    function startTimer() {
        setStartAnimate(true)
        console.log('teste1')
    }

    function pauseTimer() {
    setStartAnimate(false)
    console.log('teste2')
    }

    function stopAnimate() {
        setStartAnimate(false)
        play()
    }


    const settingBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }
    
    function setCurrentTimer (active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const updateExecute = updateSettings => {
        setExecuting(updateSettings)
        setTimerTime(updateSettings)

    }

    function stopCountdown() {
        setStartAnimate(false)
        setPomodoro(0);
      };
    
    const setTimerTime = evalute => {
        switch (evalute.active) {
            case 'trabalho':
                setPomodoro(evalute.trabalho)
                break;
                case 'pequena':
                    setPomodoro(evalute.pequena)
                    break;
                    case 'longa':
                        setPomodoro(evalute.longa)
                        break;
                default:
                    setPomodoro(0)
                    break;
        }

    }

    const children = ({ remainingTime }) => {
        const seconds = remainingTime % 60

        return `${seconds}`
    }

    return (
        <SettingContext.Provider value={{ stopCountdown,updateExecute,pomodoro,executing,startAnimate,startTimer,pauseTimer,settingBtn,setCurrentTimer, children,stopAnimate}} >
            {props.children}
        </SettingContext.Provider>
            

    )
}

export default SettingContextProvider
