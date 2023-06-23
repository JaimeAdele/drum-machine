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
    smoothKitName: 'Chord 1',
    heaterKitName: 'Heater 1',
    letter: 'Q',
    smoothKitSound: new Audio(chord1),
    heaterKitSound: new Audio(heater1),
    smoothKitSoundLink: chord1,
    heaterKitSoundLink: heater1
  },
  {
    smoothKitName: 'Chord 2',
    heaterKitName: 'Heater 2',
    letter: 'W',
    smoothKitSound: new Audio(chord2),
    heaterKitSound: new Audio(heater2),
    smoothKitSoundLink: chord2,
    heaterKitSoundLink: heater2
  },
  {
    smoothKitName: 'Chord 3',
    heaterKitName: 'Heater 3',
    letter: 'E',
    smoothKitSound: new Audio(chord3),
    heaterKitSound: new Audio(heater3),
    smoothKitSoundLink: chord3,
    heaterKitSoundLink: heater3
  },
  {
    smoothKitName: 'Shaker',
    heaterKitName: 'Heater 4',
    letter: 'A',
    smoothKitSound: new Audio(shaker),
    heaterKitSound: new Audio(heater4),
    smoothKitSoundLink: shaker,
    heaterKitSoundLink: heater4
  },
  {
    smoothKitName: 'Open HH',
    heaterKitName: 'Clap',
    letter: 'S',
    smoothKitSound: new Audio(openHH),
    heaterKitSound: new Audio(clap),
    smoothKitSoundLink: openHH,
    heaterKitSoundLink: clap
  },
  {
    smoothKitName: 'Closed HH',
    heaterKitName: 'Open HH',
    letter: 'D',
    smoothKitSound: new Audio(closedHH),
    heaterKitSound: new Audio(openHH2),
    smoothKitSoundLink: closedHH,
    heaterKitSoundLink: openHH2
  },
  {
    smoothKitName: 'Punchy Kick',
    heaterKitName: "Kick n' Hat",
    letter: 'Z',
    smoothKitSound: new Audio(punchyKick),
    heaterKitSound: new Audio(kickNHat),
    smoothKitSoundLink: punchyKick,
    heaterKitSoundLink: kickNHat
  },
  {
    smoothKitName: 'Side Stick',
    heaterKitName: 'Kick',
    letter: 'X',
    smoothKitSound: new Audio(sideStick),
    heaterKitSound: new Audio(kick),
    smoothKitSoundLink: sideStick,
    heaterKitSoundLink: kick
  },
  {
    smoothKitName: 'Snare',
    heaterKitName: 'Closed HH',
    letter: 'C',
    smoothKitSound: new Audio(snare),
    heaterKitSound: new Audio(closedHH2),
    smoothKitSoundLink: snare,
    heaterKitSoundLink: closedHH2
  }
];