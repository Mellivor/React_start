const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';
const updMessageText = 'UPDATE_MESSAGE_TEXT';
const addMessage = 'ADD_MESSAGE';
let store = {

    _callSubscriber: '',

    _state : {
        messagesPage: {
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
        },
        
        profilePage: {
            posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
            nevPostText: ''
        }
    },
    
    dispatch (action) {
        if (action.tipe === addPost) {
            let newPost = { id: 5, post: this._state.profilePage.nevPostText, likes: 0 };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.nevPostText = '';
            this._callSubscriber(this);
        } else if (action.tipe === updPost) {
            this._state.profilePage.nevPostText = action.text;
            this._callSubscriber(this);
        } else if (action.tipe === updMessageText) {
            this._state.messagesPage.newMessageText = action.text;
            this._callSubscriber(this);
        } else if (action.tipe === addMessage) {
            let newMessage = { who: 'you', messages: this._state.messagesPage.newMessageText};
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this);
        }

    },
    getState() {
    return this._state;
    },
    
    observer (observ) {
    this._callSubscriber = observ;
},
}
export const actionCreaterAddPost = () => ({ tipe: addPost });
export const actionCreaterUpdatePost = (text) => ({ tipe: updPost, text: text });
export const actionCreateraddMessage = () => ({ tipe: addMessage });
export const actionCreaterUpdMessageText = (text) => ({ tipe: updMessageText, text: text });
export default store;