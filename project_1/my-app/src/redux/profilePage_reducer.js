const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';
const profilePage_reducer = (state, action) => {
    switch (action.tipe) {
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
export const actionCreaterAddPost = () => ({ tipe: addPost });
export const actionCreaterUpdatePost = (text) => ({ tipe: updPost, text: text });
export default profilePage_reducer;
