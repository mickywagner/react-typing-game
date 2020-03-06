import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [ text, setText ] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(10)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function updateText(e) {
    const { value } = e.target
    setText(value)
  }

  function calculateWord(text) {
    const wordArray = text.trim().split(" ").filter(word => word !== "")
    console.log(wordArray.length)
    return wordArray.length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(10)
    setWordCount(0)
    setText("")
}

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
    setTimeout(() => {
            setTimeRemaining(time => time - 1)
    }, 1000)
    } else {
      setIsTimeRunning(false)
      setWordCount(calculateWord(text))
  }
}, [timeRemaining, isTimeRunning])

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
            <button onClick={() => startGame()}>Start Game</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    </div>
  );
}

export default App;
