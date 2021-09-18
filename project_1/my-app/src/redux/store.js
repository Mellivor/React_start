import messagesPage_reducer from "./messagesPage_reducer";
import profilePage_reducer from "./profilePage_reducer";


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
            newPostText: ''
        }
    },

    dispatch(action) {
        this._state.profilePage = profilePage_reducer(this._state.profilePage, action);
        this._state.messagesPage = messagesPage_reducer(this._state.messagesPage, action);
        this._callSubscriber(this);
    },
    getState() {
    return this._state;
    },

    subscribe (observ) {
    this._callSubscriber = observ;
},
}
export default store;
