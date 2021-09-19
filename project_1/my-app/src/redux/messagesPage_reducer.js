const updMessageText = 'UPDATE_MESSAGE_TEXT';
const addMessage = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Vasa' },
        { id: 6, name: 'Sergey' },
        { id: 7, name: 'Pedro' },
        { id: 8, name: 'Pedro' },
        { id: 9, name: 'Yorik' },
        { id: 10, name: 'janna' },
    ],
    friends: [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Vasa' },
    ],
    messages: [
        { id:1, who: 'you', messages: 'Hello' },
        { id:2, who: 'him', messages: 'Vatsapp' },
        { id:5, who: 'you', messages: 'Reacr rules' },
        { id:4, who: 'him', messages: 'Yohoho' },
    ],
    newMessageText: '',
};

const messagesPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case updMessageText:
            return {
                ...state,
                newMessageText: action.text,
            };
        case addMessage:
            return{
                ...state,
                messages: [...state.messages, { id:7, who: 'you', messages: state.newMessageText }],
                newMessageText: '',
            };
        default:
            return state;
    }

};
export const actionCreateraddMessage = () => ({ type: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ type: updMessageText, text: text });
export default messagesPage_reducer;
