import React from 'react';
import List from './List';

const Board = ({board}) => {
    return (
        <>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                    {board.map((boardName) => {
                        return <List key={boardName.id} />
                        
                    })}
                    <span>Hello from Board</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board;