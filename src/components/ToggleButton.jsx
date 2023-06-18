import React from 'react'

const ToggleButton = ({ text, toggle, onClick}) => {
  return (
    <div>
      <p>{text}</p>
      <div
        className={`bg-black border-4 border-black w-16 h-6 flex justify-start ${
          !toggle && 'justify-end'
        }`}
        onClick={onClick}
      >
        <div className='bg-accent w-[50%] h-full'></div>
      </div>
    </div>
  );
}

export default ToggleButton