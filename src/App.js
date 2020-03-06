import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
            <h1>Test Your Typing Speed</h1>
            <form>
                <textarea placeholder="Start typing" />
            </form>
            <h4>Time remaing: 4 seconds</h4>
            <button>Start Game</button>
            <h1>Word Count: 0</h1>
        </div>
    </div>
  );
}

export default App;
