import React from 'react';
import Square from './Square';
import s from './Board.module.css'; // Модульні стилі для Board

function Board() {
  return (
    <div className={s.boardRow}>
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
      <Square className={s.square} /> 
    </div>
  );
}

export default Board;
