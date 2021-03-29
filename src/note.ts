export type Note = string; // C1 Cb2 C#3
import _ from 'lodash';
import {sample, random} from 'lodash';

const notesNumber = {
    'C': 1,
    'C#': 2,
    'Db': 2,
    'D': 3,
    'D#': 4,
    'Eb': 4,
    'E': 5,
    'F': 6,
    'F#': 7,
    'Gb': 7,
    'G': 8,
    'G#': 9,
    'Ab': 9,
    'A': 10,
    'A#': 11,
    'Bb': 11,
    'B': 12,
}
export const sharpes: {[x: string]: string} = {
    'C': 'C',
    'C#': 'C#',
    'Db': 'C#',
    'D': 'D',
    'D#': 'D#',
    'Eb': 'D#',
    'E': 'E',
    'F': 'F',
    'F#': 'F#',
    'Gb': 'F#',
    'G': 'G',
    'G#': 'G#',
    'Ab': 'G#',
    'A': 'A',
    'A#': 'A#',
    'Bb': 'A#',
    'B': 'B',
}
export function sharpen(n: Note): Note {
    const stymbols = n.split('');
    if (n.length === 3) {
        return sharpes[n[0]+n[1]] + n[2];
    } else {
        return n;
    }
}

export function noteToNumber(n: Note): number {
    const symbols = n.split('');
    const letter = symbols[0];
    const sharp = symbols[1] === '#' ? 1 : 0;
    const flat = symbols[1] === 'b' ? -1 : 0;
    const octave = (sharp || flat) ? +symbols[2] : +symbols[1]
    const noteNumber = 'CDEFGAB'.indexOf(letter) + 1;
    return (noteNumber + sharp + flat) + 12*octave;
}

export function randomNote(): Note {
    const letter = sample(Object.keys(notesNumber)) as string;
    const octave = sample([4, 5])
    const note = letter + octave;
    return noteToNumber(note) <= 61 ? note : randomNote();
}

let playing: Note[] = [];
export function startNote(note: Note) {
    console.log('start note', note);
    const audio: any = document.querySelector(`audio[data-note="${note}"]`);
    if (playing.indexOf(note) === -1) {
        playing.push(note);
        audio.currentTime = 0;
        audio.play();
    }
}
export function endNote(note?: Note) {
    note = note || _.last(playing);
    const audio: any = document.querySelector(`audio[data-note="${note}"]`);
    audio.currentTime = 0;
    audio.pause();
    _.pull(playing, note);
    
}