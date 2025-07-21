import { useState } from 'react';

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // each guess is an array
  const [history, setHistory] = useState([]) // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)

    //formats a guess into the array of letter objects
    //e.g: [{key: 'a', color:  'yellow'}]
    const formatGuess = () => {

    }

    //adds new guess to the gusses state
    //updates the isCorrect state if the guess is correct
    //add one to the turn state
    const addNewGuess = () => {

    }

    //handles keyup event & track current guess
    //if user presses enter, adds the guess
    const handlekeyup = () => {

    }

    return {turn, currentGuess, guesses, isCorrect, handlekeyup};
}

export default useWordle;