import React, { useState } from 'react';
import Square from 'components/Square/Square'; // Правильний імпорт для компонента Square
import s from './Game.module.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  const handleClick = i => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = i => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        className={s.square} // Модульні стилі для Square
      />
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Переможець: ' + winner;
  } else if (squares.every(square => square)) {
    status = 'Нічия!';
  } else {
    status = 'Наступний гравець: ' + (xIsNext ? 'X' : 'O');
  }
  const clearBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className={s.game}>
      {' '}
      {/* Модульні стилі для Game */}
      <div className={s.gameBoard}>
        {' '}
        {/* Модульні стилі для Game */}
        <div className={s.boardRow}>
          {' '}
          {/* Модульні стилі для Game */}
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className={s.boardRow}>
          {' '}
          {/* Модульні стилі для Game */}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className={s.boardRow}>
          {' '}
          {/* Модульні стилі для Game */}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className={s.gameInfo}>
        {' '}
        {/* Модульні стилі для Game */}
        <div>{status}</div>
        <div className={s.clearButton}>
          <button onClick={clearBoard}>Очистити дошку</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
