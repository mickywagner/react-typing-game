import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(10)

  function updateText(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWord(text) {
    const wordArray = text.trim().split(" ").filter(word => word !== "")
    console.log(wordArray.length)
    return wordArray.length
  }

  useEffect(() => {
    setTimeout(() => {
        if(timeRemaining > 0) {
            setTimeRemaining(prevState => prevState - 1)
        }
    }, 1000)
}, [timeRemaining])

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
            <h4>Time remaing: {timeRemaining} seconds</h4>
            <button onClick={() => calculateWord(text)}>Start Game</button>
            <h1>Word Count: 0</h1>
        </div>
    </div>
  );
}

export default App;
