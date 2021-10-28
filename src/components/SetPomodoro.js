import React, { useContext, useState } from 'react'
import { SettingContext } from '../context/SettingsContext'
import Button from './Button'


const SetPomodoro = () => {
    const [newTimer, setNewTimer] = useState({
        trabalho: 25,
        pequena: 5,
        longa: 10,
        active:'trabalho'
    })
    const {updateExecute} = useContext(SettingContext)
    
    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'trabalho':
                setNewTimer({
                    ...newTimer,
                    trabalho: parseInt(value)
                })
                break;
            case 'pausaPequena':
                setNewTimer({
                    ...newTimer,
                    pequena: parseInt(value)
                })
                break;
                case 'pausaLonga':
                    setNewTimer({
                        ...newTimer,
                        longa: parseInt(value)
                    })
                    break;
            default:

        }
        console.log(newTimer)
    }
    const handleSubmit = e => { 
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input  className="input" name="trabalho" onChange={handleChange} value={newTimer.trabalho}/>
                    <input  className="input" name="pausaPequena" onChange={handleChange} value={newTimer.pequena}/>
                    <input  className="input" name="pausaLonga" onChange={handleChange} value={newTimer.longa}/>
                </div>
                <Button title="Coloque O Tempo" _callback={handleSubmit} />
            </form>
            
        </div>
    )
}

export default SetPomodoro
