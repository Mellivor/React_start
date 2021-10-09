const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';
const setProfile = 'SET_PROFILE';

let initialState = {
    posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
    newPostText: '',
    // userok: { id:1, name:'Mila', birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite:'www.google.com'}
    userok: null
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
        case setProfile:
            console.log(action.profile)
            return {
                ...state, userok: action.profile
                // ...state,userok: { id:1, name:action.profile.fullName, birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite:'www.google.com'}
                // ...state, ...userok, name: action.profile.fullName
        };
        default:
            return state;
    }


};
export const actionCreaterAddPost = () => ({ type: addPost });
export const setUserProfile = (profile) => ({ type: setProfile, profile });
export const actionCreaterUpdatePost = (text) => ({ type: updPost, text: text });
export default profilePage_reducer;
