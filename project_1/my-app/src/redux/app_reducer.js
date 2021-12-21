import { logined } from "./athor_reducer";


const stateIsLoaded = 'IS_LOADED';


let initialState = {
    authorized: false
};

const app_reducer = (state = initialState, action) => {
    switch (action.type) {

        case stateIsLoaded:
            return { ...state, authorized: true }

        default:
            return state;
    }

};
export const setloaded = () => ({ type: stateIsLoaded });


export const initializeApp = () => (dispatch)=>{

        let dispatchResolt = dispatch(logined())
        dispatchResolt.then(() => {

            dispatch(setloaded())
         })

}

export default app_reducer;
