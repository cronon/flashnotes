import react, { useEffect, useRef } from 'react';
import Vex from 'vexflow';
import { Note } from './note';

export function Stave({note}: {note: Note}) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const VF = Vex.Flow;
        const div = document.querySelector('#stave') as HTMLElement;
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(150, 200);
        var context = renderer.getContext();
        var stave = new VF.Stave(10, 40, 100);

        stave.addClef("treble");
        stave.setContext(context).draw();
        const vfNote = new VF.StaveNote({clef: "treble", keys: [note.note+'/'+note.octave], duration: "1" });
        if (note.accidental) {
            vfNote.addAccidental(0, new VF.Accidental(note.accidental))
        }
        vfNote.x_shift = 9;
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4}).setMode(VF.Voice.Mode.SOFT);
        voice.addTickables([vfNote]);
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 150);
        voice.draw(context, stave);

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