import './App.css'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div 
      className="App"
      onClick={e => {inputRef.current.focus()}}
    >
      <input 
        ref={inputRef}
        type="text" 
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={
          e => {
            if (e.key === "Enter") {
              let newOutput = '';
              newOutput = output + "\n" + "\n" + "$" + input + "\n";
              switch (input) {
                case "ls":
                  newOutput += "List of projects";
                  break;
                case "pwd":
                  newOutput += "You're on my cool terminal site";
                  break;
                default:
                  newOutput += "Unknown Command"
              }
              setOutput(newOutput);
              setInput('');
            }
          }
        }
      />
      <div className="terminal">
        {output}
      </div>
    </div>
  )
}

export default App