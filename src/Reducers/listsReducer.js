import uuid from 'uuid/v4';
import { CONSTANTS } from '../Actions';

const initialState = [
    {
        title: "My Portfolio Projects",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Project Druid - That's this one",
            },
            {
                id: uuid(),
                text: "Currently a static list",
            }
            
        ]
    },
    {
        title: "Checking this works for >1 Lists",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text:"I'm a developer!",
            },
            {
                id: uuid(),
                text: "No, seriously."
            }
        ]
    }
    
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: uuid()
            }
            return [...state, newList];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: uuid(),
            }
        
        const newState = state.map(list=> {
            if(list.id === action.payload.listID) {
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                }
            } else {
                return list;
            }
        })

        return newState;

        default:
            return state;
    }
}

export default listsReducer;