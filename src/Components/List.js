import React from 'react';
import Card from './Card';
import ActionButton from './ActionButton';

//Styling and Props for each List on each Board
const List = ({title, cards, listID}) => {
    const drop = e =>{
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return(
        <>
            <div className="col-sm col-md-3 ml-auto border border-dark" onDrop={drop} onDragOver={dragOver}>
                <h4>{title}</h4>
                { cards.map(card => (
                    <Card text={card.text} />
                ))}
                <button className="btn btn-sm btn-dark" type="button"><ActionButton listID={listID} /></button>
                
                
            </div>
            
        </>
    )
}

export default List;