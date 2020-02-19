import React from 'react';
import Item from './Item';

const List = ({list}) => {
    return(
        <>
            <div className="album py-5">
                <div className="container">
                    <div className="row">
                        {list.map((boardName) => {
                        return <List key={boardName.id} item="boardName" />
                        
                        })}
                        <span>Hello from Lists</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List;