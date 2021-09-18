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
        case addPost: {
            let newStateCopy = { ...state };
            let newPost = { id: 5, post: state.newPostText, likes: 0 };
            newStateCopy.posts = [...state.posts];
            newStateCopy.posts.push(newPost);
            newStateCopy.newPostText = '';
            return newStateCopy;
        };
        case updPost:{
            let newStateCopy = { ...state };
            newStateCopy.newPostText = [...state.newPostText];
            newStateCopy.newPostText = action.text
            return newStateCopy;
        };
        default:
            return state;
    }


};
export const actionCreaterAddPost = () => ({ type: addPost });
export const actionCreaterUpdatePost = (text) => ({ type: updPost, text: text });
export default profilePage_reducer;
