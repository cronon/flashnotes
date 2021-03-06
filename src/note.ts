import _ from 'lodash';

const notesNumber: any = {
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
let notesCache: {note: number, times: number}[] = _.range(60, 84).map(i => ({note: i, times: 0}));
let prevNote = 60;
export function randomNote(): Note {
    const minTimes = notesCache.reduce((min, c) => c.times < min ? c.times : min, notesCache[0].times);
    const candidates = notesCache.filter(c => minTimes + 2 > c.times)
        .map(c => c.note)
        .concat(prevNote);
    const chosen = _.sample(candidates)!;
    const inCache = notesCache.find(c => c.note === chosen);
    inCache!.times += 1;
    return Note.fromNumber(chosen)
}

export class Note {
    static fromNumber(midi: number) {
        const letters = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const letter = letters[midi % 12];
        const octave = Math.floor(midi / 12) - 1;
        const accidental = letter[1] || null;
        return new Note(midi, letter + octave, accidental, letter, octave);
    }

    static fromString(s: string) {
        const note = s.length === 3 ? s[0] + s[1] : s[0];
        const noteNumber = notesNumber[note] - 1;
        const octave = +s[s.length - 1];
        const midi = (noteNumber) + 12*(octave + 1);
        const accidental = (s[1] === 'b' || s[1] === '#') ? s[1] : null;
        return new Note(midi, s, accidental, note, octave);
    }
    constructor(
        public midi: number,
        public str: string,
        public accidental: string | null,
        public note: string,
        public octave: number) {}

    eq(note: Note) {
        return this.midi === note.midi;
    }

    toString() {
        return this.str;
    }
}


let playing: Note[] = [];
function withAudio(note: Note, cb: (audio: HTMLAudioElement) => void) {
    const audio: HTMLAudioElement | null = document.querySelector(`audio[data-note="${note.toString()}"]`);
    if (audio) {
        cb(audio);
    } else {
        throw new Error('Cannot find <audio> for note ' + note.toString());
    }
}
export function startNote(note: Note) {
    withAudio(note, audio => {
        if (!playing.find(p => p.eq(note))) {
            playing.push(note);
            audio.currentTime = 0;
            audio.play();
        }
    });
}
export function endNote(note?: Note) {
    note = note || _.last(playing);
    if (note) {
        withAudio(note, audio => {
            audio.currentTime = 0;
            audio.pause();
            _.remove(playing, p => p.eq(note!));
        });
    }
}
export async function playNote(note: Note): Promise<void> {
    startNote(note);
    return new Promise(res => {
        setTimeout(() => {
            endNote(note)
            res();
        }, 500)
    })
}