import { userAPI } from "../API/API";

const follows = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUserst = 'SET_USERS';
const setCurrentPaget = 'SET_CURRENT_PAGE';
const setTotalUsersCountt = 'SET_USERS_COUNT';
const setNextPagesList = 'SET_NEXT_PAGEST_LISTS';
const setPreviousPagesList = 'SET_PAGEST_LISTS';
const stateIsLoading = 'IS_LOADING';
const stateIsLoaded = 'IS_LOADED';
const updateStatus = 'UPDATE_STATUS';
const togleIsFolowing = 'TOGLE_IS_FOLLOWING';


let initialState = {
    usersList: [],
    pageSize: 4,
    totalUsers: 0,
    currentPage: 1,
    pageList: 1,
    loaded: false,
    changingStatus: false,
    loadedButtons: [],

};

const usersPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case follows:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;

                })
            }

        case unfollow:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;

                })
            }

        case setUserst:
            return { ...state, usersList: action.users }

        case setCurrentPaget:
            return { ...state, currentPage: action.currentPage }

        case setTotalUsersCountt:
            return { ...state, totalUsers: action.totalUsers }

        case setNextPagesList:
            if (state.pageList*10 < Math.ceil(state.totalUsers / state.pageSize)) {
                return { ...state, pageList: state.pageList + 1 }
            } else return state;

        case setPreviousPagesList:
            if (state.pageList >= 2) {
                return { ...state, pageList: state.pageList - 1 }
            } else return state;

        case stateIsLoaded:
            return { ...state, loaded: false }

        case stateIsLoading:
            return { ...state, loaded: true }

        case updateStatus:
            return { ...state, changingStatus: action.loading }

        case togleIsFolowing:
            return {
                ...state,
                loadedButtons: action.loading ?
                    [...state.loadedButtons, action.userId]:
                    state.loadedButtons.filter(id => id !== action.userId)
            }

        default:
            return state;
    }

};
export const followSucces = (userId) => ({ type: follows, userId });
export const unFollowSucces = (userId) => ({ type: unfollow, userId });
export const setUsers = (users) => ({ type: setUserst, users});
export const setCurrentPage = (currentPage) => ({ type: setCurrentPaget, currentPage});
export const setTotalUsersCount = (totalUsers) => ({ type: setTotalUsersCountt, totalUsers});
export const nextPagesList = () => ({ type: setNextPagesList});
export const previousPagesList = () => ({ type: setPreviousPagesList});
export const setloading = () => ({ type: stateIsLoading});
export const setloaded = () => ({ type: stateIsLoaded});
export const updateStatusAC = (loading) => ({ type: updateStatus, loading});
export const togleIsFolowingAC = (loading, userId) => ({ type: togleIsFolowing, userId, loading});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setloading());
        userAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setloaded())
        });
    }
};

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(togleIsFolowingAC(true, userId));
        userAPI.unfollow(userId).then(response => {
            if (response === 0) {
                dispatch(unFollowSucces(userId));
            }
            dispatch(togleIsFolowingAC(false, userId));
        })
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(togleIsFolowingAC(true, userId))
            userAPI.follow(userId).then(response => {
                if (response === 0) {
                    dispatch(followSucces(userId))
                }
                dispatch(togleIsFolowingAC(false, userId))
            })
    }
};


export default usersPage_reducer;
