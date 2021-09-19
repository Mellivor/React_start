const updMessageText = 'UPDATE_MESSAGE_TEXT';
const addMessage = 'ADD_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Vasa' },
        { id: 6, name: 'Sergey' },
        { id: 9, name: 'Pedro' },
        { id: 9, name: 'Pedro' },
        { id: 9, name: 'Yorik' },
        { id: 2, name: 'janna' },
    ],
    friends: [
        { id: 1, name: 'Dimon' },
        { id: 2, name: 'Vasa' },
    ],
    messages: [
        { who: 'you', messages: 'Hello' },
        { who: 'him', messages: 'Vatsapp' },
        { who: 'you', messages: 'Reacr rules' },
        { who: 'him', messages: 'Yohoho' },
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
                messages: [...state.messages, { who: 'you', messages: state.newMessageText }],
                newMessageText: '',
            };
        default:
            return state;
    }

};
export const actionCreateraddMessage = () => ({ type: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ type: updMessageText, text: text });
export default messagesPage_reducer;
