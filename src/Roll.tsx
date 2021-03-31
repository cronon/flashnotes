import _ from 'lodash';
import react, { useCallback, useEffect } from 'react';
import { endNote, Note, playNote, startNote } from './note';
import './Roll.css';

function keyToNote(key: number) {
    const keyMap: any = {
        65: "C4",
        87: "C#4",
        83: "D4",
        69: "D#4",
        68: "E4",
        70: "F4",
        84: "F#4",
        71: "G4",
        89: "G#4",
        72: "A4",
        85: "A#4",
        74: "B4",
        75: "C5",
        79: "C#5",
        76: "D5",
        80: "D#5",
        186: "E5",
    }
    const res = keyMap[key];
    if (res) return Note.fromString(res);
    else throw new Error('Undefined key pressed ' + key)
}
let mouseNote: Note | null = null;
export function Roll({onKey}: {onKey: (e: Note) => void} ) {
    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        window.addEventListener('keyup', keyUp);

        function keyDown(e: KeyboardEvent) {
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!key) return;
            key.classList.add("playing");
            startNote(keyToNote(e.keyCode))
        }
        function keyUp(e: KeyboardEvent) {
            const key: any = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            console.log(e.keyCode, key)
            if (!key) return;
            key.classList.remove("playing");
            const note = keyToNote(e.keyCode);
            endNote(note)
            onKey(note)
        }
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener('keyup', keyUp);
        }
    }, [onKey]);

    const mouseDown = useCallback(function (e: any) {
        const target = e.target as HTMLElement;
        const noteStr = target.dataset.note
        if (noteStr) {
            const note = Note.fromString(noteStr);
            startNote(note);
            target.classList.add('playing');
            mouseNote = note;
            playNote(note).then(() => {
                target.classList.remove('playing')
                onKey(note);
            });
        }
    }, [onKey]);

    return (
<section id="main">
    <div className="keys" onMouseDown={mouseDown}>
      <div data-key="65" className="key key-white" data-note="C4"></div>
      <div data-key="87" className="key key-sharp" data-note="C#4"></div>
      <div data-key="83" className="key key-white" data-note="D4"></div>
      <div data-key="69" className="key key-sharp" data-note="D#4"></div>
      <div data-key="68" className="key key-white" data-note="E4"></div>
      <div data-key="70" className="key key-white" data-note="F4"></div>
      <div data-key="84" className="key key-sharp" data-note="F#4"></div>
      <div data-key="71" className="key key-white" data-note="G4"></div>
      <div data-key="89" className="key key-sharp" data-note="G#4"></div>
      <div data-key="72" className="key key-white" data-note="A4"></div>
      <div data-key="85" className="key key-sharp" data-note="A#4"></div>
      <div data-key="74" className="key key-white" data-note="B4"></div>

      <div data-key="75" className="key key-white" data-note="C5"></div>
      <div data-key="79" className="key key-sharp" data-note="C#5"></div>
      <div data-key="76" className="key key-white" data-note="D5"></div>
      <div data-key="80" className="key key-sharp" data-note="D#5"></div>
      <div data-key="186" className="key key-white" data-note="E5"></div>
      <div className="key key-white" data-note="F5"></div>
      <div className="key key-sharp" data-note="F#5"></div>
      <div className="key key-white" data-note="G5"></div>
      <div className="key key-sharp" data-note="G#5"></div>
      <div className="key key-white" data-note="A5"></div>
      <div className="key key-sharp" data-note="A#5"></div>
      <div className="key key-white" data-note="B5"></div>
    </div>
</section>)
}

