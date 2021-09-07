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
    getState() {
        return this._state;
        },
    addPost() {
        debugger;
        let newPost = { id: 5, post: this._state.profilePage.nevPostText, likes: 0 };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.nevPostText = '';
        this._callSubscriber(this);
    },
    
    uppdatePost (text) {
    this._state.profilePage.nevPostText = text;
    this._callSubscriber(this);
},
     observer (observ) {
    this._callSubscriber = observ;
},
}
export default store;