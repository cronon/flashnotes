import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Stave } from './stave';
import {Note, playNote, randomNote} from './note';
import { Roll } from './Roll';

function App() {
  const [note, setNote] = useState(Note.fromString('C4'));
  const [result, setResult] = useState('?');
  useEffect(() => {
    playNote(note);
  }, [note]);
  const onKey = useCallback((played: Note) => {
    if (played.eq(note)) {
      setResult(note.toString());
      setTimeout(() => {
        setResult('?');
        const nextNote = randomNote();
        setNote(nextNote)
      }, 500)
    }
  }, [note])
  return (
    <div className="App">
      <Stave note={note}/>
      <h1>{result}</h1>
      <Roll onKey={onKey} />
    </div>
  );
}

export default App;
