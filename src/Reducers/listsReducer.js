import uuid from 'uuid/v4';

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
        default:
            return state;
    }
}

export default listsReducer;