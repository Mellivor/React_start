import { userAPI, profileAPI } from "../API/API";

const addPost = 'ADD_POST';
const deletePost = 'DELETE_POST';
const setProfile = 'SET_PROFILE';
const setStatus = 'SET_STATUS';

let initialState = {
    posts: [
                { id: 1, post: 'Atlas, I started a real job!!!', likes: 999 },
                { id: 2, post: 'Second_post!!!', likes: 1 },
                { id: 6, post: 'Third_post!!!', likes: -300 },
            ],
    userok: null,
    status:'Add your status',
};

const profilePage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                posts: [...state.posts, { id: 5, post: action.post, likes: 0 }],
            };
        case deletePost:
            return {
                ...state,
                posts: state.posts.filter(p=> p.id !=action.postId)
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
export const actionCreaterAddPost = (post) => ({ type: addPost, post});
export const actionCreaterDeletePost = (postId) => ({ type: deletePost, postId});
export const setUserProfile = (profile) => ({ type: setProfile, profile });
export const setStatusAC = (status) => ({ type: setStatus, status });

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
                if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
            });
    }
}
export default profilePage_reducer;
