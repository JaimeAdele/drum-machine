import { useState } from 'react'

const LetterButton = ({ letter, sound, volume }) => {
  const [buttonColor, setButtonColor] = useState('bg-primary drop-shadow-bold');

  return (
    <div
      key={letter}
      className={`flex justify-center items-center rounded-md text-[1.25rem] ${buttonColor}`}
      onMouseDown={() => {
        setButtonColor('bg-accent drop-shadow-semiBold');
        sound.volume = volume;
        sound.play();
      }}
      onMouseUp={() => setButtonColor('bg-primary drop-shadow-bold')}
      onTouchStart={() => setButtonColor('bg-accent drop-shadow-semiBold')}
      onTouchEnd={() => setButtonColor('bg-primary drop-shadow-bold')}
    >
      {letter}
    </div>
  );
}

export default LetterButton