const updMessageText = 'UPDATE_MESSAGE_TEXT';
const addMessage = 'ADD_MESSAGE';
const messagesPage_reducer = (state, action) => {
    if (action.tipe === updMessageText) {
        state.newMessageText = action.text;
    } else if (action.tipe === addMessage) {
        let newMessage = { who: 'you', messages: this._state.messagesPage.newMessageText};
        state.messages.push(newMessage);
        state.newMessageText = '';
    }
    return state;
};
export const actionCreateraddMessage = () => ({ tipe: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ tipe: updMessageText, text: text });
export default messagesPage_reducer;
