let rerenderEntireTree;

let state = {
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
};
export const addPost = () => {
    let newPost = { id: 5, post: state.profilePage.nevPostText, likes: 0 };
    state.profilePage.posts.push(newPost);
    state.profilePage.nevPostText = '';
    rerenderEntireTree(state);
};
export const uppdatePost = (text) => {
    state.profilePage.nevPostText = text;
    rerenderEntireTree(state);
};
export const observer = (observ) => {
    rerenderEntireTree = observ;
};
export default state;