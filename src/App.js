import React, {useState} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState("")

  function updateText(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWord(text) {
    const wordCount = text.split(" ").length
    console.log(wordCount)
    return wordCount
  }

  return (
    <div className="App">
      <div>
            <h1>Test Your Typing Speed</h1>
            <form>
                <textarea 
                  placeholder="Start typing..."
                  value={text}
                  onChange={updateText}
                />
            </form>
            <h4>Time remaing: 4 seconds</h4>
            <button onClick={() => calculateWord(text)}>Start Game</button>
            <h1>Word Count: 0</h1>
        </div>
    </div>
  );
}

export default App;
