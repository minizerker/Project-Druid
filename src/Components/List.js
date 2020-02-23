import React from 'react';
import Card from './Card';
import ActionButton from './ActionButton';

//Styling and Props for each List on each Board
const List = ({title, cards}) => {
    return(
        <>
            <div className="col-sm col-md-4">
                <h4>{title}</h4>
                { cards.map(card => (
                    <Card text={card.text} />
                ))}
                <button className="btn btn-sm btn-dark" type="button"><ActionButton /></button>
                
                
            </div>
            
        </>
    )
}

export default List;