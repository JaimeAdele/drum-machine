import { useState } from 'react'
import './App.css'

function App() {
  const buttonLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  return (
    <div className='bg-lightBackground border-accent border-4 w-[60vw] h-[40vh]'>
      <div className='w-[60%] h-full p-8 grid grid-cols-3 gap-4'>
        {buttonLetters.map(letter => (
          <div className='bg-primary flex justify-center items-center rounded-md drop-shadow-bold font-russoOne'>{letter}</div>
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default App
