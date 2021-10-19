import * as axios from 'axios'

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '8475436c-fdbb-4932-80c1-47139984e4a1' }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow(id) {
        return instans.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode;
            })
    },

    follow(id) {
        return instans.post(`follow/${id}`, {})
            .then(response => {
                return response.data.resultCode;
            })
    },

    // loginAPI( dispatch, authorizedProfile) {
    // return instans.get('auth/me',)
    //     .then(response => {
    //         if (response.data.resultCode === 0) {
    //             let { id, login, email } = response.data.data;
    //             return(dispatch(authorizedProfile(id, login, email)));
    //         }
    //     });
// }
    login() {
    return instans.get('auth/me',)
        .then(response => {
                return response
        });
},
profilInfo(userId) {
    return instans.get(`profile/${userId}`)
    .then(response => {
                return response.data;
            })
}


}
