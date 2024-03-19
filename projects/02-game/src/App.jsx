import { useState } from 'react'
import './App.css'
import { confetti } from 'canvas-confetti'
import { Square } from './components/square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom } from './components/board'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square != null)
  }
  
  const updateBoard = (index) => {
    // if(board[index]!=null) return
    if(board[index] || winner){ return }
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Empezar de nuevo</button>
        <section className='game'>
          {
            board.map( (square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>
        {
          winner != null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner == false
                    ? 'Empate'
                    : 'Ganó:'
                  }
                </h2>
                {
                  winner && (
                    <header className='win'>
                      {winner && <Square>{winner}</Square>}
                    </header>
                  )
                }

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </main>
    </>
  )
}

export default App
