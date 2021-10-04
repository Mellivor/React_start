const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET_USERS';
const setCurrentPage = 'SET_CURRENT_PAGE';
const setTotalUsersCount = 'SET_USERS_COUNT';
const setNextPagesList = 'SET_NEXT_PAGEST_LISTS';
const setPreviousPagesList = 'SET_PAGEST_LISTS';
const stateIsLoading = 'IS_LOADING';
const stateIsLoaded = 'IS_LOADED';


let initialState = {
    usersList: [],
    pageSize: 4,
    totalUsers: 0,
    currentPage: 1,
    pageList: 1,
    loaded: false


};

const usersPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
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

        case setUsers:
            return { ...state, usersList: action.users }

        case setCurrentPage:
            return { ...state, currentPage: action.currentPage }

        case setTotalUsersCount:
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

        default:
            return state;
    }

};
export const FollowAc = (userId) => ({ type: follow, userId });
export const UnfollowAc = (userId) => ({ type: unfollow, userId });
export const SetUsersAc = (users) => ({ type: setUsers, users});
export const CurrentPageAc = (currentPage) => ({ type: setCurrentPage, currentPage});
export const totalUsersCountAc = (totalUsers) => ({ type: setTotalUsersCount, totalUsers});
export const SetNextPagesAc = () => ({ type: setNextPagesList});
export const SetPreviousPagesAc = () => ({ type: setPreviousPagesList});
export const stateIsLoadingAc = () => ({ type: stateIsLoading});
export const stateIsLoadedAc = () => ({ type: stateIsLoaded});
export default usersPage_reducer;
