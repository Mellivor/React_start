import { userAPI, profileAPI } from "../API/API";

const addPost = 'ADD_POST';
const updPost = 'UPDATE_TEXT';
const setProfile = 'SET_PROFILE';
const setStatus = 'SET_STATUS';

let initialState = {
    posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
    newPostText: '',
    userok: null,
    status:'Add your status'
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
            return {
                ...state, userok: action.profile
        };
        case setStatus:
            return {
                ...state, status: action.status
        };
        default:
            return state;
    }


};
export const actionCreaterAddPost = () => ({ type: addPost });
export const setUserProfile = (profile) => ({ type: setProfile, profile });
export const setStatusAC = (status) => ({ type: setStatus, status });
export const actionCreaterUpdatePost = (text) => ({ type: updPost, text: text });

export const profileRequest = (yourId) => {
    return (dispatch) => {
        userAPI.profilInfo(yourId)
            .then(response => {
                dispatch(setUserProfile(response));
            });
    }
};
export const getProfileStatus = (yourId) => {
    return (dispatch) => {
        profileAPI.getStatus(yourId)
            .then(response => {
                dispatch(setStatusAC(response));
            });
    }
}
export const setProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                dispatch(setStatusAC(response));
            }
            });
    }
}
export default profilePage_reducer;
