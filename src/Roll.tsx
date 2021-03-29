import _ from 'lodash';
import react, { useEffect } from 'react';
import { endNote, Note, startNote } from './note';
import './Roll.css';
const keyToNote: any = {
    "65": "C4",
    "87": "C#4",
    "83": "D4",
    "69": "D#4",
    "68": "E4",
    "70": "F4",
    "84": "F#4",
    "71": "G4",
    "89": "G#4",
    "72": "A4",
    "85": "A#4",
    "74": "B4",
    "75": "C5",
    "79": "C#5",
    "76": "D5",
    "80": "D#5",
    "186": "E5",
}

export function Roll({onKey}: {onKey: (e: Note) => void} ) {
    useEffect(() => {
        window.addEventListener("keydown", keyDown);
        window.addEventListener('keyup', keyUp);

        function keyDown(e: KeyboardEvent) {
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!key) return;
            key.classList.add("playing");
            startNote(keyToNote[e.keyCode.toString()])
        }
        function keyUp(e: KeyboardEvent) {
            const key: any = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!key) return;
            key.classList.remove("playing");
            endNote(keyToNote[e.keyCode.toString()])
            onKey(key.dataset.note)
        }
        return () => {
            window.removeEventListener("keydown", keyDown);
            window.removeEventListener('keyup', keyUp);
        }
    }, []);

    function mouseDown(e: any) {
        const target = e.target as HTMLElement;
        const note = target.dataset.note
        if (note) {
            startNote(note);
            target.classList.add('playing');
            setTimeout(() => {
                target.classList.remove('playing')
                endNote(note);
                onKey(note);
            }, 300);
        }
    }
    return (
<section id="main">
    <div className="nowplaying"></div>
    <div className="keys" onMouseDown={mouseDown}>
      <div data-key="65" className="key" data-note="C4">
          <span className="hints">A</span>
      </div>
      <div data-key="87" className="key sharp" data-note="C#4">
          <span className="hints">W</span>
      </div>
      <div data-key="83" className="key" data-note="D4">
          <span className="hints">S</span>
      </div>
      <div data-key="69" className="key sharp" data-note="D#4">
          <span className="hints">E</span>
      </div>
      <div data-key="68" className="key" data-note="E4">
          <span className="hints">D</span>
      </div>
      <div data-key="70" className="key" data-note="F4">
          <span className="hints">F</span>
      </div>
      <div data-key="84" className="key sharp" data-note="F#4">
          <span className="hints">T</span>
      </div>
      <div data-key="71" className="key" data-note="G4">
          <span className="hints">G</span>
      </div>
      <div data-key="89" className="key sharp" data-note="G#4">
          <span className="hints">Y</span>
      </div>
      <div data-key="72" className="key" data-note="A4">
          <span className="hints">H</span>
      </div>
      <div data-key="85" className="key sharp" data-note="A#4">
          <span className="hints">U</span>
      </div>
      <div data-key="74" className="key" data-note="B4">
          <span className="hints">J</span>
      </div>
      <div data-key="75" className="key" data-note="C5">
          <span className="hints">K</span>
      </div>
      <div data-key="79" className="key sharp" data-note="C#5">
          <span className="hints">O</span>
      </div>
      <div data-key="76" className="key" data-note="D5">
          <span className="hints">L</span>
      </div>
      <div data-key="80" className="key sharp" data-note="D#5">
          <span className="hints">P</span>
      </div>
      <div data-key="186" className="key" data-note="E5">
          <span className="hints">;</span>
      </div>
    </div>
</section>)
}

