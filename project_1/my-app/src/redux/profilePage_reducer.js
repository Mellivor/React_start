const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';
const profilePage_reducer = (state, action) => {
    if (action.tipe === addPost) {
        let newPost = { id: 5, post: this._state.profilePage.nevPostText, likes: 0 };
        state.posts.push(newPost);
        state.nevPostText = '';
    } else if (action.tipe === updPost) {
        state.nevPostText = action.text
    }
    return state;
            
};
export const actionCreaterAddPost = () => ({ tipe: addPost });
export const actionCreaterUpdatePost = (text) => ({ tipe: updPost, text: text });
export default profilePage_reducer;
