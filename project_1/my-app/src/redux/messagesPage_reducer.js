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
    switch (action.type){
        case updMessageText :
            state.newMessageText = action.text;
            return state;
        case addMessage :
        let newMessage = { who: 'you', messages: state.newMessageText};
        state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
    
};
export const actionCreateraddMessage = () => ({ type: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ type: updMessageText, text: text });
export default messagesPage_reducer;
