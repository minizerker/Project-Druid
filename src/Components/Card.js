import React from 'react';



//Contains props and styling for individual cards.
const Cards = ({text}) => {
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopProagation();
    }
    return (
        <div className="card" onDragStart={dragStart} onDragOver={dragOver}>
            <div className="card-body">
                <div className="card-title" >{text}</div>
                <div className="card-text">Quick Example Text</div>
            </div>
        </div>
    )
}

export default Cards;