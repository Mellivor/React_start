const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET_USERS';
const SetCurrentPage = 'SET_CURRENT_PAGE';
const setTotalUsersCount = 'SET_USERS_COUNT';

let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsers: 0,
    currentPage: 2

};

const usersPage_reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case Follow:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;

                })
            }

            case Unfollow:
                return {
                    ...state,
                    usersList: state.usersList.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u;

                    })
                }

            case SetUsers:
            return { ...state, usersList: action.users }

            case SetCurrentPage:
            return { ...state, currentPage: action.currentPage }

            case setTotalUsersCount:
            console.log(action.totalUsers)
                return { ...state, totalUsers: action.totalUsers}

                default:
                    return state;
    }

};
export const FollowAc = (userId) => ({ type: Follow, userId });
export const UnfollowAc = (userId) => ({ type: Unfollow, userId });
export const SetUsersAc = (users) => ({ type: SetUsers, users});
export const CurrentPageAc = (currentPage) => ({ type: SetCurrentPage, currentPage});
export const totalUsersCountAc = (totalUsers) => ({ type: setTotalUsersCount, totalUsers});
export default usersPage_reducer;
