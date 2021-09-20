const Follow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';
const SetUsers = 'SET_USERS';

let initialState = {
    usersList: [
        // { id:1, name:'Mila', followed: true, birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite:'www.google.com'},
        // { id:5, name:'Vasa', followed: false, birdthDate: '14.05.1999', sity: 'Lviv', education: 'none', webSite:'www.???.?'},
        // { id:2, name:'Peta', followed: false, birdthDate: '25.07.2000', sity: 'Yasina', education: 'none', webSite:'www.???.?'},
        // { id:3, name:'Lina', followed: true, birdthDate: '01.01.1000', sity: 'Balmorra', education: 'none', webSite:'www.???.?'},
        // { id:4, name:'Goga', followed: false, birdthDate: '07.07.0777', sity: 'Seyda Neen', education: 'none', webSite:'www.???.?'},
    ]
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

        case Unfollow: {
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;

                })
            }
        };
         case SetUsers:
            //  return { ...state, usersList: [...state.usersList,...action.users]}
             return { ...state, usersList: [...action.users]}

        default:
            return state;
    }

};
export const FollowAc = (userId) => ({ type: Follow, userId });
export const UnfollowAc = (userId) => ({ type: Unfollow, userId });
export const SetUsersAc = (users) => ({ type: SetUsers, users});
export default usersPage_reducer;
