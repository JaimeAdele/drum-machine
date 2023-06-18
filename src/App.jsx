import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider';
import ToggleButton from './components/ToggleButton';

function App() {
  const [state, setState] = useState({
    power: true,
    bank: true,
    volume: 50,
    lastChange: 'Power On'
  });

  const buttonLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div className='bg-lightBackground border-accent border-4 sm:w-[60vw] h-[70vh] sm:h-[40vh] flex flex-col sm:flex-row'>
      <div className='w-full sm:w-[55%] h-full p-8 grid grid-cols-3 gap-4'>
        {buttonLetters.map((letter) => (
          <div key={letter} className='bg-primary flex justify-center items-center rounded-md drop-shadow-bold text-[1.25rem]'>
            {letter}
          </div>
        ))}
      </div>

      <div className='shrink w-full sm:w-[45%] h-[50%] sm:h-full p-8 flex flex-col gap-5 justify-center items-center'>
        <ToggleButton
          text='Power'
          toggle={state.power}
          onClick={() =>
            setState((prev) => ({
              ...state,
              power: !prev.power,
              lastChange: prev.power ? 'Power Off' : 'Power On'
            }))
          }
        />

        <div className='w-[90%] h-12 bg-darkBackground flex justify-center items-center'>
          {state.lastChange}
        </div>

        <div className='w-full pb-3'>
          <p>Volume</p>
          <ReactSlider
            className='slider'
            trackClassName='slider-track'
            thumbClassName='slider-thumb'
            value={state.volume}
            onChange={(value) =>
              setState({
                ...state,
                volume: value,
                lastChange: `Volume: ${value}`
              })
            }
          />
        </div>

        <ToggleButton
          text='Bank'
          toggle={state.bank}
          onClick={() =>
            setState((prev) => ({
              ...state,
              bank: !prev.bank,
              lastChange: prev.bank ? 'Bank Off' : 'Bank On'
            }))
          }
        />
      </div>
    </div>
  );
}

export default App
