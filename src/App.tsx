import React, { useEffect, useState } from 'react';
import './App.css';
import { Stave } from './stave';
import {endNote, Note, noteToNumber, randomNote, sharpen, startNote} from './note';
import { Roll } from './Roll';

function App() {
  const [step, setStep] = useState(0);
  const [note, setNote] = useState('C4');
  const [result, setResult] = useState('?');
  useEffect(() => {
    console.log('new note', note)
    const sharpNote = sharpen(note);
    startNote(sharpNote);
    setTimeout(() => endNote(sharpNote), 500);

  }, [note])
  return (
    <div className="App">
      <Stave note={note}/>
      <h1>{result}</h1>
      <Roll onKey={onKey} />
    </div>
  );

  function onKey(played: Note) {
    console.log('onKey', played, sharpen(note))
    if (played === sharpen(note)) {
      setResult(note);
      setTimeout(() => {
        setResult('?')
        setNote(randomNote());
      }, 500)
    }
  }
}

export default App;
