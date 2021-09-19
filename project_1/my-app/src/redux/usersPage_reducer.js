const Folow = 'FOLLOW';
const Unfollow = 'UNFOLLOW';

let initialState = {
    usersList: [
        { id:1, name:'Mila', birdthDate: '22.05.2019', sity: 'Kamenets-Podolsky', education: 'Genius from birth', webSite:'www.google.com'},
        { id:5, name:'Vasa', birdthDate: '14.05.1999', sity: 'Lviv', education: 'none', webSite:'www.???.?'},
        { id:2, name:'Peta', birdthDate: '25.07.2000', sity: 'Yasina', education: 'none', webSite:'www.???.?'},
        { id:3, name:'Lina', birdthDate: '01.01.1000', sity: 'Balmorra', education: 'none', webSite:'www.???.?'},
        { id:4, name:'Goga', birdthDate: '07.07.0777', sity: 'Seyda Neen', education: 'none', webSite:'www.???.?'},
    ]
};

const usersPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }

};
export const FollowAc = () => ({ type: Folow });
export const UnfollowAc = () => ({ type: Unfollow });
export default usersPage_reducer;
