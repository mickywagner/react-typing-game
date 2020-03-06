import React, {useState} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState('Start typing...')

  function updateText(e) {
    const { value } = e.target
    setText(value)
  }

  console.log(text)

  return (
    <div className="App">
      <div>
            <h1>Test Your Typing Speed</h1>
            <form>
                <textarea 
                  value={text}
                  onChange={updateText}
                />
            </form>
            <h4>Time remaing: 4 seconds</h4>
            <button>Start Game</button>
            <h1>Word Count: 0</h1>
        </div>
    </div>
  );
}

export default App;
