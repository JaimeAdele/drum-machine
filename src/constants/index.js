import closedHH from '../assets/closedHH.mp3';
import snare from '../assets/snare.mp3';
import closedHH2 from '../assets/closedHH2.mp3';
import chord1 from '../assets/chord1.mp3';
import chord2 from '../assets/chord2.mp3';
import chord3 from '../assets/chord3.mp3';
import openHH from '../assets/openHH.mp3';
import openHH2 from '../assets/openHH2.mp3';
import shaker from '../assets/shaker.mp3';
import heater1 from '../assets/heater1.mp3';
import heater2 from '../assets/heater2.mp3';
import heater3 from '../assets/heater3.mp3';
import heater4 from '../assets/heater4.mp3';
import clap from '../assets/clap.mp3';
import kickNHat from '../assets/kickNHat.mp3';
import punchyKick from '../assets/punchyKick.mp3';
import kick from '../assets/kick.mp3';
import sideStick from '../assets/sideStick.mp3';

export const buttons = [
  {
    letter: 'Q',
    smoothKitSound: new Audio(chord1),
    heaterKitSound: new Audio(heater1)
  },
  {
    letter: 'W',
    smoothKitSound: new Audio(chord2),
    heaterKitSound: new Audio(heater2)
  },
  {
    letter: 'E',
    smoothKitSound: new Audio(chord3),
    heaterKitSound: new Audio(heater3)
  },
  {
    letter: 'A',
    smoothKitSound: new Audio(shaker),
    heaterKitSound: new Audio(heater4)
  },
  {
    letter: 'S',
    smoothKitSound: new Audio(openHH),
    heaterKitSound: new Audio(clap)
  },
  {
    letter: 'D',
    smoothKitSound: new Audio(closedHH),
    heaterKitSound: new Audio(openHH2)
  },
  {
    letter: 'Z',
    smoothKitSound: new Audio(punchyKick),
    heaterKitSound: new Audio(kickNHat)
  },
  {
    letter: 'X',
    smoothKitSound: new Audio(sideStick),
    heaterKitSound: new Audio(kick)
  },
  {
    letter: 'C',
    smoothKitSound: new Audio(snare),
    heaterKitSound: new Audio(closedHH2)
  }
];