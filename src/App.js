import { useContext, useEffect } from "react";
import Button from "./components/Button";
import SetPomodoro from "./components/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";
import ContadorAnimado from './components/ContadorAnimado'



function App () {
  const {pomodoro, executing, setCurrentTimer,stopCountdown, settingBtn, children,startAnimate, startTimer,pauseTimer, updateExecute} = useContext(SettingContext)
  useEffect(() => {updateExecute(executing)}, [executing, startAnimate, updateExecute])
  
  return (
    <div className="container">
      <h1>Pomodoro</h1>
    {pomodoro !== 0 ? 
    
    <>

      <ul className="labels">
        <li> 
        <Button
              title="Trabalho" 
              activeClass={executing.active === 'trabalho' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('trabalho')} 
            />
         <Button 
              title="Pequena Pausa" 
              activeClass={executing.active === 'pequena' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('pequena')} 
            />
          <Button 
              title="Longa Pausa" 
              activeClass={executing.active === 'longa' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('longa')} 
            />
          </li>
      </ul>
      <Button title="Voltar" _callback={settingBtn}
      />
      <div className='time-container'>
        <div className="time-wrapper">
          <ContadorAnimado
            key={pomodoro}
            timer={pomodoro}
            animate={startAnimate}
          >
          {children}
          </ContadorAnimado>

        </div>

      </div>
      <div className="button-wrapper">
      <Button title="Começar" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
      <Button title="Pausar" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
      <Button title="Reset" activeClass={startAnimate ? 'active' : undefined} _callback={stopCountdown} />
      </div>
      
       </> : <SetPomodoro />}
  </div>
  )        
  }


export default App;
