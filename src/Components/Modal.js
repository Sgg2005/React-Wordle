import React from 'react'

export default function Modal({ isCorrect, turn, solution, onPlayAgain, onExitGame }) {
  return (
    <div className="modal">
        {isCorrect ? (
            <div>
                <h1>Congratulations! You have Won</h1>
                <p className="solution">{solution}</p>
                <p>You found the solution in {turn} guesses</p>
            </div>
        ) : (
            <div>
                <h1>Game Over You Lost! The correct word was:</h1>
                <p className="solution">{solution}</p>
                <p>Better luck next time</p>
            </div>
        )}
        <button onClick={onPlayAgain} style={{ margin: '8px' }}>Play Again</button>
        <button onClick={onExitGame} style={{ margin: '8px' }}>Exit Game</button>
    </div>
  )
}