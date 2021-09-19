const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';

let initialState = {
    posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
            newPostText: ''
};

const profilePage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                posts: [...state.posts, { id: 5, post: state.newPostText, likes: 0 }],
                newPostText: '',
            };
        case updPost:
            return {
            ...state,
            newPostText: action.text,
        };
        default:
            return state;
    }


};
export const actionCreaterAddPost = () => ({ type: addPost });
export const actionCreaterUpdatePost = (text) => ({ type: updPost, text: text });
export default profilePage_reducer;
