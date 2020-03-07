import {useState, useRef, useEffect} from 'react'

function useWordGame(startTime = 15) {

  const [ text, setText ] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
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
    setTimeRemaining(startTime)
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

return {text, updateText, isTimeRunning, textBoxRef, timeRemaining, startGame, wordCount }

}

export default useWordGame