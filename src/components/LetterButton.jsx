import { useRef, useState } from 'react'

const LetterButton = ({ letter, soundName, sound, soundLink, volume, stateChange }) => {
  const [buttonColor, setButtonColor] = useState('bg-primary drop-shadow-bold');
  const buttonRef = useRef(null);

  const handleClick = () => {
    const audio = document.getElementById(letter);
    audio.play();
  }

  return (
    <div
      key={letter}
      id={soundName}
      ref={buttonRef}
      className={`drum-pad flex justify-center items-center rounded-md text-[1.25rem] ${buttonColor}`}
      onKeyDown={(e) => {
        e.key.toUpperCase() === letter && handleClick()
      }}
      onMouseDown={() => {
        setButtonColor('bg-accent drop-shadow-semiBold');
        sound.volume = volume;
        handleClick();
        stateChange();
      }}
      onMouseUp={() => setButtonColor('bg-primary drop-shadow-bold')}
      onTouchStart={() => {
        setButtonColor('bg-accent drop-shadow-semiBold');
        sound.volume = volume;
        handleClick();
        stateChange();
      }}
      onTouchEnd={() => setButtonColor('bg-primary drop-shadow-bold')}
    >
      <audio src={soundLink} id={letter} className='clip'></audio>
      {letter}
    </div>
  );
}

export default LetterButton