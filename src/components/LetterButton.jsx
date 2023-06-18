import { useState } from 'react'

const LetterButton = ({ letter }) => {
  const [buttonColor, setButtonColor] = useState(
    'bg-primary'
  );

  return (
    <div
      key={letter}
      className={`flex justify-center items-center rounded-md drop-shadow-bold text-[1.25rem] ${buttonColor}`}
      onMouseDown={() => setButtonColor('bg-accent')}
      onMouseUp={() => setButtonColor('bg-primary')}
      onTouchStart={() => setButtonColor('bg-accent')}
      onTouchEnd={() => setButtonColor('bg-primary')}
    >
      {letter}
    </div>
  );
}

export default LetterButton