import react, { useEffect, useRef } from 'react';
import Vex from 'vexflow';
import { Note } from './note';

export function Stave({note}: {note: Note}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const VF = Vex.Flow;
        // Create a VexFlow renderer attaced to the DIV element "boo"
        const vf = new VF.Factory({renderer: {elementId: 'stave'}});
        var score = vf.EasyScore();
        var system = vf.System();
    
        // Create a 4/4 treble stave, and add two parallel voices
        const stave =  system.addStave({
            voices: [
                score.voice(score.notes(note), {}).setMode(VF.Voice.Mode.SOFT)
            ]
        });
        stave.addClef('treble');

        // Draw it!
        vf.draw();
        return () => {
            if (ref.current) {
                const svg = ref.current.querySelector('svg')
                svg && svg.remove();
            }
        }
    }, [note])
    return <div className="stave" id="stave" ref={ref}>

    </div>
}