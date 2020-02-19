import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid/v4';
import 'react-bootstrap';
import Board from './Components/Board';

const Boards = localStorage.getItem('board')? JSON.parse(localStorage.getItem('board')):[];


function App() {
  const [boards, setBoards] = useState(Boards);

  // State Functionality

  
  return (
    <div className="App">
      <header className="App-header">
        <Board board={boards} />
      </header>
    </div>
  );
}

export default App;
