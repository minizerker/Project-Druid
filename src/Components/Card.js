import React from 'react';



//Contains props and styling for individual cards.
const Cards = ({text}) => {
    return (
        <div className="col-sm col-dark">
            <span>{text}</span>
        </div>
    )
}

export default Cards;