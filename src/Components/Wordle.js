import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution) //custom hook to manage game state
  const [showModal, setShowModal] = React.useState(false) //state to control modal visibility
  
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    //checks if user won the game or not
    if( isCorrect){
      setTimeout(() => setShowModal(true), 2000) //show modal after 2 seconds if the user guessed correctly
      window.removeEventListener('keyup', handleKeyup)
    }
    
    //checks if user has lost the game or not 
    if(turn > 5 && !isCorrect) {
      setTimeout(() => setShowModal(true), 2000) //show modal after 2 seconds if the user lost
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>Current Guess - {currentGuess}</div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}