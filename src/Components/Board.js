import React from 'react';
import Item from './Item';

const Board = ({board}) => {
    return (
        <>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                    {board.map((lists) => {
                        return <Item key={lists.id} List={lists}/>
                        
                    })}
                    <span>Hello from Board</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Board;