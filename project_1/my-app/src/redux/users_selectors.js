export const getUsers = (state) => {
    return state.usersList.usersList
}

export const getPageSize = (state) => {
    return state.usersList.pageSize
}

export const getTotalUsers = (state) => {
    return state.usersList.totalUsers
}

export const getCurrentPage = (state) => {
    return state.usersList.currentPage
}

export const getPageList = (state) => {
    return state.usersList.pageList
}

export const getLoaded = (state) => {
    return state.usersList.loaded
}

export const getChangingStatus = (state) => {
    return state.usersList.changingStatus
}

export const getLoadedButtons = (state) => {
    return state.usersList.loadedButtons
}
