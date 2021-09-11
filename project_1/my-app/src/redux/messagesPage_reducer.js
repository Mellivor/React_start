const updMessageText = 'UPDATE_MESSAGE_TEXT';
const addMessage = 'ADD_MESSAGE';
const messagesPage_reducer = (state, action) => {
    switch (action.tipe){
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
export const actionCreateraddMessage = () => ({ tipe: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ tipe: updMessageText, text: text });
export default messagesPage_reducer;
