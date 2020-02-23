import React, { useState, Component } from 'react';
import './App.css';
import 'react-bootstrap';
import { connect } from 'react-redux';
import List from './Components/List';
import ActionButton from './Components/ActionButton';
//const Boards = localStorage.getItem('board')? JSON.parse(localStorage.getItem('board')):[];

class App extends Component {
  render() {//const [boards, setBoards] = useState(Boards);
  const { lists } = this.props;
  // State Functionality

  
  return (
    <>
    
    <div>
      <header className="text-center"><h2>Project Druid</h2></header>
    </div>
    <div className="container-fluid">
      <main className="row p-2 bg-light">
        {lists.map(list => (
          <List title={list.title} cards={list.cards} />
        ))}
        <div className="col-sm col-md-4"><button type="button" className="btn btn-sm btn-dark"><ActionButton list /></button></div>
      </main>
    </div>
    </>
  );
}
}
const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps) (App);
