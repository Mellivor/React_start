const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';

let initialState = {
    posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
            nevPostText: ''
};

const profilePage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = { id: 5, post: state.nevPostText, likes: 0 };
            state.posts.push(newPost);
            state.nevPostText = '';
            return state;
        case updPost:
            state.nevPostText = action.text
            return state;
        default:
            return state;
    }
            
            
};
export const actionCreaterAddPost = () => ({ type: addPost });
export const actionCreaterUpdatePost = (text) => ({ type: updPost, text: text });
export default profilePage_reducer;
