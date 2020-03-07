import React from 'react';
import useWordGame from './Hooks/useWordGame'
import './App.css';

function App() {
  const {
    text,
    updateText,
    isTimeRunning,
    textBoxRef,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame()

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
