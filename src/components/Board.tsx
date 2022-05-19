import React, { useMemo, useState } from 'react'
import Button from './Button'
import Square from './Square'

const Board: React.FC = () => {
  const [squares, setSquares] = useState<any[]>(() => Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  console.log('first render')
  const handleClick = (i: number): void => {
    const squaresCopy = squares.slice()
    if (squaresCopy[i] || playerWinner(squaresCopy)) return // win or draw return
    squaresCopy[i] = xIsNext ? 'X' : 'O'
    setSquares(squaresCopy) // update state
    setXIsNext(!xIsNext) // update turn
  }
  const handleReset = (): void => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }
  // check if player has won the game. return null is draw, string is winner
  const playerWinner = (squares: Array<string>): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]
    }
    return null
  }
  // check if player has won the game. return null is draw, string is winner
  const winner = useMemo(() => playerWinner(squares), [squares])
  // check reset game return boolean
  const status = useMemo((): boolean => {
    if (winner !== null) return true
    return squares.every((square) => square !== null)
  }, [winner, squares])

  return (
    <>
      <h1 className="text">
        {winner
          ? `Winner: ${winner}`
          : status
          ? 'Draw'
          : `Next player: ${xIsNext ? 'X' : 'O'}`}
      </h1>
      <div className="board">
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
      {status && (
        <button className="btn-reset" onClick={handleReset}>
          Reset Game
        </button>
      )}
    </>
  )
}

export default Board
