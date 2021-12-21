import { userAPI } from "../API/API";

const stateIsLoading = 'IS_LOADING';
const stateIsLoaded = 'IS_LOADED';
const setYourProfile = 'SET_YOUR_PROFILE';
const setAuthorizedProfile = 'SET_ATHORIZED_PROFILE';

let initialState = {
    id: null,
    login: null,
    email: null,
    authorized: false,
    uoyrInfo: null
};

const author_reducer = (state = initialState, action) => {
    switch (action.type) {
        case setAuthorizedProfile:
            if (!action.data.id && !action.data.login && action.data.email) {
                return {
                    ...state,
                    ...action.data,
                    authorized: false
                }
            }
            return {
                ...state,
                ...action.data,
                authorized: true
            }

        case setYourProfile:
            return {...state, uoyrInfo: action.profile}

        case stateIsLoaded:
            return { ...state, loaded: false }

        case stateIsLoading:
            return { ...state, loaded: true }

        default:
            return state;
    }

};
export const setloading = () => ({ type: stateIsLoading});
export const setloaded = () => ({ type: stateIsLoaded });
export const setUserProfile = (profile) => ({ type: setYourProfile, profile });
export const authorizedProfile = (id, login, email) => ({ type: setAuthorizedProfile, data: { id, login, email } });


export const logined = () => {
    return (dispatch) => {
        return userAPI.autologin()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    dispatch(authorizedProfile(id, login, email));
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        userAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authorizedProfile({ id: null, login: null, email: null }));
                }
            });
    }
}

export const loginFormik = (email, password, rememberMe) => {
    console.log(email + password + rememberMe)
    return (dispatch) => {
        userAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    userAPI.autologin()
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                let { id, login, email } = response.data.data;
                                dispatch(authorizedProfile(id, login, email));
                            }
                        });
                }
            });
    }
}


export default author_reducer;
