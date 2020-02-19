import React from 'react';

export const Item = ({item}) => {
    const {title, blurb, count, completeCheck, editCheck, deleteCheck} = item
    return (
        <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <span className="text-center"><h4>{title}</h4> </span>
            <span className="text-center"><h6>{blurb}</h6> </span>
            <span className="text-center">{count}</span>
            <button className="btn btn-sm btn-dark">{completeCheck}</button>
            <span className="text-center"><p>Hello From Items</p>
            <button className="btn btn-sm btn-dark">{editCheck}</button>
            <button className="btn btn-sm btn-dark">{deleteCheck}</button>
            </span>
        </div>
        </div>
    )
}