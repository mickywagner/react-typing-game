import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const STARTING_TIME = 15

  const [ text, setText ] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

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
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
}

function endGame() {
  setIsTimeRunning(false)
  setWordCount(calculateWord(text))
}

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
    setTimeout(() => {
            setTimeRemaining(time => time - 1)
    }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
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
                  disabled={!isTimeRunning}
                  ref={textBoxRef}
                />
            </form>
            <h4>Time remaing: {timeRemaining} seconds</h4>
            <button 
              onClick={startGame}
              disabled={isTimeRunning}
            >
              Start Game
            </button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    </div>
  );
}

export default App;
